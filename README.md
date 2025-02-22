# Lesson Planner with Gemini AI - Frontend Project

A modern web application that harnesses Google's Gemini AI to create dynamic lesson plans with PDF generation capabilities.

## Features
- Direct Gemini AI Integration
- Real-time lesson plan generation
- PDF export functionality
- Clean and intuitive user interface
- Responsive design for all devices

## Setup Instructions

1. Clone the repository:
git clone https://github.com/yourusername/lesson-planner-frontend.git
cd lesson-planner-frontend
npm install

## Tech Stack
- React.js
- @google/generative-ai library
- TailwindCSS
- jsPDF for PDF generation

## Project Structure
/src
  /components
    - LessonForm.jsx
    - PDFExport.jsx
  /API
    - gemini.js
  /styles
    - main.css
  App.jsx
  main.jsx

## Usage

1. Start development server:
npm run dev

2. Build for production:
npm run build

3. Preview production build:
npm run preview

## How to Use

1. Enter lesson details:
   - Subject
   - Grade Level
   - Topic
   - Duration

2. Click "Generate Plan" to get AI-powered lesson content

3. Export to PDF using the "Download PDF" button

## Contributing
1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## Development Notes
- Uses Vite for faster development experience
- Implements responsive design principles
- Direct integration with Gemini AI
- Client-side PDF generation
- No backend required - fully frontend implementation

## Browser Support
- Chrome (recommended)
- Firefox
- Safari
- Edge

## License
This project is licensed under the MIT License.

## Acknowledgments
- Google Generative AI team for Gemini API
- React.js community
