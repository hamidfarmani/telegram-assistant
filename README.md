# Telegram Assistant

This project is a Telegram bot that provides various functionalities such as text-to-speech, voice-to-text transcription, and search capabilities using different APIs.

## Features

- **Text-to-Speech**: Converts text to speech using ElevenLabs API.
- **Voice-to-Text**: Transcribes voice messages using OpenAI's Whisper model.
- **Search**: Provides search capabilities using Tavily and Google Gemini APIs.

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/hamidfarmani/telegram-assistant.git
   cd telegram-assistant
   ```

2. Install dependencies:

   ```sh
   pnpm install
   ```

3. Create a `.env` file in the root directory and add your API keys:

   ```sh
   touch .env
   ```

   Add the following lines to the `.env` file:

   ```
   TELEGRAM_BOT_TOKEN=your_telegram_bot_token
   ELEVENLABS_API_KEY=your_elevenlabs_api_key
   OPENAI_API_KEY=your_openai_api_key
   TAVILY_API_KEY=your_tavily_api_key
   GEMINI_API_KEY=your_gemini_api_key
   ```

## Usage

Voice Messages: Send a voice message to the bot, and it will transcribe the message and provide an answer using the search functionality. The bot will also reply with an audio message containing the answer.

## File Structure

- `src/index.ts`: Main entry point of the bot.
- `src/text-to-speech.ts`: Handles text-to-speech conversion using ElevenLabs API.
- `src/voice-to-text.ts`: Handles voice-to-text transcription using OpenAI's Whisper model.
- `src/search-gemini.ts`: Handles search functionality using Google Gemini API.
- `src/search-tavily.ts`: Handles search functionality using Tavily API.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.

## Acknowledgements

- [ElevenLabs](https://www.elevenlabs.io/)
- [OpenAI](https://www.openai.com/)
- [Tavily](https://www.tavily.com/)
- [Google Gemini](https://aistudio.google.com/app/prompts/new_chat/)
