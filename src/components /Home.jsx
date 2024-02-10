import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home-container">

      {/* Main Content Section */}
      <main className="main-content">
        {/* Left Sidebar */}
        <div className="left-sidebar">
          {/* Add left sidebar content */}
          <div className="profile-card">
            <img
              src="https://placekitten.com/150/150" // Replace with your profile picture URL
              alt="Profile"
            />
            <h2>John Doe</h2>
            <p>Clinical Officer</p>
          </div>
        </div>

    {/* Main Feed */}
    <div className="main-feed">
          {/* Post Creation Bar with Profile Image on the Left */}
          <div className="post-form">
            <div className="profile-image">
              <img
                src="https://placekitten.com/50/50" // Replace with your profile picture URL
                alt="Profile"
              />
            </div>
            <textarea placeholder="What's on your mind?" />
            <div className="post-form-footer">
              <button>Post</button>
            </div>
          </div>

        {/* Right Sidebar */}
        <div className="right-sidebar">
          {/* Add right sidebar content */}
          <div className="connections">
            <h3>Your Connections</h3>
            {/* Add a list of connections */}
            <ul>
              <li>Connection 1</li>
              <li>Connection 2</li>
              {/* Add more connections as needed */}
            </ul>
          </div>
        </div>
        </div>
      
      </main>
    </div>
  );
};

export default Home;
