# X (Twitter) Clone

X is a social media application built with the MERN stack (MongoDB, Express.js, React.js, Node.js), designed as a clone of Twitter. Users can create posts, like, comment, follow other users, and interact with content in a familiar social media experience.

## ⭐ Features :

- **⚛️ Tech Stack**: React.js, MongoDB, Node.js, Express, Tailwind CSS
- **🔐 Authentication**: JWT (JSON Web Tokens) for secure authentication
- **🔥 React Query**: Used for efficient data fetching and caching
- **👥 Suggested Users**: Get recommendations on users to follow
- **✍️ Creating Posts**: Create posts with images and text
- **🗑️ Deleting Posts**: Delete your posts (if you're the owner)
- **💬 Commenting on Posts**: Add comments to posts
- **❤️ Liking Posts**: Like posts and track your activity
- **🔒 Delete Posts**: Only the post owner can delete their posts
- **📝 Edit Profile Info**: Update your profile details
- **🖼️ Edit Cover and Profile Images**: Change your profile and cover images
- **📷 Image Uploads**: Upload images to Cloudinary
- **🔔 Notifications**: Receive notifications for activity on your posts
- **🌐 Deployment**: Deployed and ready to use

## Tech Stack

- **Frontend**:

  - React.js
  - React Query
  - Tailwind CSS
  - Cloudinary (for image uploads)

- **Backend**:
  - Node.js
  - Express.js
  - MongoDB
  - JWT Authentication

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/danielace1/twitter-clone.git
   ```

2. Install dependencies:

```bash
  cd backend
  npm install

  cd frontend
  npm install
```

3. Create a `.env` file in the backend directory and add the following environment variables:

```bash
MONGO_URI="YOUR MONGO_URI"
PORT="YOUR PORT"
JWT_SECRET="YOUR JWT_SECRET"
NODE_ENV="YOUR NODE_ENV"

CLOUDINARY_CLOUD_NAME="CLOUDINARY_CLOUD_NAME"
CLOUDINARY_API_KEY="CLOUDINARY_API_KEY"
CLOUDINARY_API_SECRET="CLOUDINARY_API_SECRET"
```

4. Run the backend and frontend servers:

```bash
# In the backend directory
npm run dev

# In the frontend directory
npm start
```

## Contributing

- We welcome contributions! If you would like to help improve the project, follow these steps:

  - Fork the repository
  - Create a branch `git checkout -b feature-name`
  - Commit your changes `git commit -m 'Add new feature'`
  - Push to the branch `git push origin feature-name`
  - Open a [Pull Request](https://github.com/danielace1/twitter-clone/pulls) with a description of the changes

## License

- [MIT](./LICENSE)

## Author

- [Sudharsan](https://www.facebook.com/sudharsandaniel01)
