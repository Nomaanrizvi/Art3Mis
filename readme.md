# Art3Mis - AI Image Generation Platform

**Art3Mis** is a cutting-edge platform for AI-generated art. It allows users to create stunning AI-generated images, share them on a community page, and explore creations from other users. Built with modern technologies for scalability and performance, Art3Mis provides a seamless experience for artists and enthusiasts alike.

## Features

- **AI Image Generation**: Create art using advanced AI models.
- **Community Sharing**: Share your creations with others and explore their works.
- **Responsive Design**: Enjoy a smooth user experience on all devices.
- **Secure Image Storage**: Images are safely stored using Cloudinary.
- **Robust Backend**: Scalable and efficient server built with Express.js.
- **Modern Frontend**: Built with Vite and styled using Tailwind CSS.
- **Database Integration**: MongoDB Atlas for secure and reliable data management.

---

## Tech Stack

### Frontend
- **Vite**: Lightning-fast development environment.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.

### Backend
- **Express.js**: Minimal and flexible Node.js web application framework.

### Database
- **MongoDB Atlas**: Cloud-based NoSQL database for data storage and management.

### Image Storage
- **Cloudinary**: Secure and efficient media management and storage platform.

---

## Installation

### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Clone the Repository
```bash
git clone https://github.com/Nomaanrizvi/Art3Mis.git

cd Art3Mis
```

### Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd server
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file for environment variables:
   ```plaintext
   MONGO_URI=<Your MongoDB Atlas URI>
   CLOUDINARY_NAME=<Your Cloudinary cloud name>
   CLOUDINARY_API_KEY=<Your Cloudinary API key>
   CLOUDINARY_API_SECRET=<Your Cloudinary API secret>
   ```
4. Start the backend server:
   ```bash
   npm run dev
   ```

### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd client
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

---

## Usage

1. Open the frontend in your browser at `http://localhost:5173`.
2. Use the platform to generate images or browse the community page.
3. Share your creations and explore others' artwork.

---

## Contributing

Contributions are welcome! Follow these steps:
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add new feature"
   ```
4. Push to your branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Acknowledgments

- Thanks to the creators of Vite, Tailwind CSS, Express.js, MongoDB, and Cloudinary for their amazing tools.
- Special appreciation to the AI community for inspiring creativity.
