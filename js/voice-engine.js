// Voice Narration and Accessibility Engine
class VoiceEngine {
  constructor() {
    this.isEnabled = this.loadVoiceSettings();
    this.synthesis = window.speechSynthesis;
    this.voices = [];
    this.currentVoice = null;
    this.settings = {
      rate: 0.9,
      pitch: 1.0,
      volume: 0.8,
      preferredVoice: null
    };
    
    this.init();
  }

  async init() {
    // Wait for voices to load
    await this.loadVoices();
    this.selectOptimalVoice();
    this.loadVoiceSettings();
  }

  loadVoices() {
    return new Promise((resolve) => {
      const loadVoicesWhenAvailable = () => {
        this.voices = this.synthesis.getVoices();
        if (this.voices.length > 0) {
          resolve();
        } else {
          // Some browsers load voices asynchronously
          setTimeout(loadVoicesWhenAvailable, 100);
        }
      };

      if (this.voices.length === 0) {
        this.synthesis.addEventListener('voiceschanged', loadVoicesWhenAvailable);
      }
      
      loadVoicesWhenAvailable();
    });
  }

  selectOptimalVoice() {
    // Prefer English voices, then any voice
    const englishVoices = this.voices.filter(voice => 
      voice.lang.startsWith('en-')
    );
    
    // Prefer female voices for educational content (research shows better retention)
    const femaleVoices = englishVoices.filter(voice => 
      voice.name.toLowerCase().includes('female') ||
      voice.name.toLowerCase().includes('woman') ||
      voice.name.toLowerCase().includes('zira') ||
      voice.name.toLowerCase().includes('susan')
    );

    if (femaleVoices.length > 0) {
      this.currentVoice = femaleVoices[0];
    } else if (englishVoices.length > 0) {
      this.currentVoice = englishVoices[0];
    } else if (this.voices.length > 0) {
      this.currentVoice = this.voices[0];
    }
  }

  loadVoiceSettings() {
    const saved = localStorage.getItem('waec_voice_settings_v1');
    if (saved) {
      const settings = JSON.parse(saved);
      this.isEnabled = settings.enabled || false;
      this.settings = { ...this.settings, ...settings.voice };
    }
    return this.isEnabled;
  }

  saveVoiceSettings() {
    const settings = {
      enabled: this.isEnabled,
      voice: this.settings
    };
    localStorage.setItem('waec_voice_settings_v1', JSON.stringify(settings));
  }

  toggle() {
    this.isEnabled = !this.isEnabled;
    this.saveVoiceSettings();
    return this.isEnabled;
  }

  speak(text, options = {}) {
    if (!this.isEnabled || !this.synthesis || !text) return;

    // Cancel any current speech
    this.synthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    
    // Apply settings
    utterance.voice = this.currentVoice;
    utterance.rate = options.rate || this.settings.rate;
    utterance.pitch = options.pitch || this.settings.pitch;
    utterance.volume = options.volume || this.settings.volume;

    // Add event listeners
    utterance.onstart = options.onstart;
    utterance.onend = options.onend;
    utterance.onerror = options.onerror;

    this.synthesis.speak(utterance);
    return utterance;
  }

  stop() {
    if (this.synthesis) {
      this.synthesis.cancel();
    }
  }

  pause() {
    if (this.synthesis) {
      this.synthesis.pause();
    }
  }

  resume() {
    if (this.synthesis) {
      this.synthesis.resume();
    }
  }

  // Speak question with proper formatting
  speakQuestion(question, options = {}) {
    if (!this.isEnabled) return;

    // Clean up the question text for better speech
    let cleanText = question
      .replace(/([a-z])([A-Z])/g, '$1 $2') // Add space before capital letters
      .replace(/(\d+)([a-zA-Z])/g, '$1 $2') // Add space between numbers and letters
      .replace(/([a-zA-Z])(\d+)/g, '$1 $2') // Add space between letters and numbers
      .replace(/\s+/g, ' ') // Normalize whitespace
      .trim();

    // Add natural pauses
    cleanText = cleanText
      .replace(/,/g, ', ') // Pause after commas
      .replace(/\./g, '. ') // Pause after periods
      .replace(/\?/g, '? ') // Pause after questions
      .replace(/:/g, ': '); // Pause after colons

    // Prepend with context
    const contextText = options.questionNumber ? 
      `Question ${options.questionNumber}. ` : 
      'Question: ';
    
    this.speak(contextText + cleanText, {
      ...options,
      rate: 0.8 // Slightly slower for questions
    });
  }

  // Speak options with enumeration
  speakOptions(options, selectedIndex = null) {
    if (!this.isEnabled || !options || options.length === 0) return;

    let optionsText = 'The options are: ';
    options.forEach((option, index) => {
      const prefix = selectedIndex === index ? 'Selected: ' : '';
      optionsText += `${prefix}Option ${String.fromCharCode(65 + index)}: ${option}. `;
    });

    this.speak(optionsText, { rate: 0.9 });
  }

  // Speak feedback with appropriate tone
  speakFeedback(isCorrect, explanation = '') {
    if (!this.isEnabled) return;

    const feedback = isCorrect ? 'Correct!' : 'Incorrect.';
    let text = feedback;
    
    if (explanation) {
      text += ` ${explanation}`;
    }

    this.speak(text, {
      rate: isCorrect ? 1.0 : 0.9,
      pitch: isCorrect ? 1.1 : 0.9
    });
  }

  // Speak summary information
  speakSummary(score, total, percentage) {
    if (!this.isEnabled) return;

    const text = `Quiz complete. You scored ${score} out of ${total} questions correct, for a score of ${percentage} percent.`;
    
    this.speak(text, {
      rate: 0.9,
      onend: () => {
        // Provide additional encouragement
        setTimeout(() => {
          let encouragement;
          if (percentage >= 90) {
            encouragement = 'Excellent work!';
          } else if (percentage >= 70) {
            encouragement = 'Good job!';
          } else if (percentage >= 50) {
            encouragement = 'Keep practicing to improve!';
          } else {
            encouragement = 'Don\'t give up. Review the material and try again.';
          }
          this.speak(encouragement, { pitch: 1.1 });
        }, 500);
      }
    });
  }

  // Accessibility helpers
  announceNavigation(section) {
    if (!this.isEnabled) return;
    
    const announcements = {
      'setup': 'Setup section',
      'quiz': 'Quiz section',
      'summary': 'Results summary',
      'dashboard': 'Dashboard',
      'analytics': 'Analytics',
      'achievements': 'Achievements',
      'social': 'Social features'
    };

    const text = announcements[section] || section;
    this.speak(`Navigating to ${text}`, { rate: 1.2 });
  }

  announceProgress(current, total) {
    if (!this.isEnabled) return;
    this.speak(`Progress: ${current} of ${total}`, { rate: 1.1 });
  }

  announceTimeRemaining(minutes, seconds) {
    if (!this.isEnabled) return;
    
    let text;
    if (minutes > 0) {
      text = `${minutes} minutes and ${seconds} seconds remaining`;
    } else {
      text = `${seconds} seconds remaining`;
    }
    
    this.speak(text, { rate: 1.1 });
  }

  // Achievement announcements
  announceAchievement(achievement) {
    if (!this.isEnabled) return;

    const text = `Achievement unlocked: ${achievement.name}! ${achievement.description}`;
    
    this.speak(text, {
      rate: 0.9,
      pitch: 1.2,
      volume: 1.0
    });
  }

  // Settings and customization
  setVoice(voiceIndex) {
    if (voiceIndex >= 0 && voiceIndex < this.voices.length) {
      this.currentVoice = this.voices[voiceIndex];
      this.settings.preferredVoice = this.currentVoice.name;
      this.saveVoiceSettings();
    }
  }

  setRate(rate) {
    this.settings.rate = Math.max(0.1, Math.min(3.0, rate));
    this.saveVoiceSettings();
  }

  setPitch(pitch) {
    this.settings.pitch = Math.max(0.0, Math.min(2.0, pitch));
    this.saveVoiceSettings();
  }

  setVolume(volume) {
    this.settings.volume = Math.max(0.0, Math.min(1.0, volume));
    this.saveVoiceSettings();
  }

  // Get available voices for UI
  getAvailableVoices() {
    return this.voices.map((voice, index) => ({
      index,
      name: voice.name,
      lang: voice.lang,
      isDefault: voice.default,
      isCurrent: voice === this.currentVoice
    }));
  }

  // Test voice settings
  testVoice() {
    this.speak('This is a test of the voice narration system. How does this sound?', {
      onend: () => {
        console.log('Voice test completed');
      }
    });
  }
}

// Export for use in main app
if (typeof module !== 'undefined' && module.exports) {
  module.exports = VoiceEngine;
} else {
  window.VoiceEngine = VoiceEngine;
}