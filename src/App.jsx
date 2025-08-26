import React, { useState, useEffect } from "react";
import ProfileCard from "./ProfileCard";
import "./index.css";

export default function App() {
  // Expanded profile data (12 users)
  const [profiles, setProfiles] = useState([
    { id: 1, name: "Ali Ahmad", bio: "Full Stack Developer", avatar: "https://i.pravatar.cc/150?img=1", isFollowed: false },
    { id: 2, name: "Sara Khan", bio: "UI/UX Designer", avatar: "https://i.pravatar.cc/150?img=2", isFollowed: false },
    { id: 3, name: "John Doe", bio: "React Enthusiast", avatar: "https://i.pravatar.cc/150?img=3", isFollowed: false },
    { id: 4, name: "Emma Watson", bio: "Frontend Developer", avatar: "https://i.pravatar.cc/150?img=4", isFollowed: false },
    { id: 5, name: "Michael Scott", bio: "Backend Developer", avatar: "https://i.pravatar.cc/150?img=5", isFollowed: false },
    { id: 6, name: "Sophia Lee", bio: "Mobile App Developer", avatar: "https://i.pravatar.cc/150?img=6", isFollowed: false },
    { id: 7, name: "David Kim", bio: "Cloud Engineer", avatar: "https://i.pravatar.cc/150?img=7", isFollowed: false },
    { id: 8, name: "Olivia Brown", bio: "Data Scientist", avatar: "https://i.pravatar.cc/150?img=8", isFollowed: false },
    { id: 9, name: "William Smith", bio: "AI/ML Engineer", avatar: "https://i.pravatar.cc/150?img=9", isFollowed: false },
    { id: 10, name: "Isabella Martinez", bio: "Cybersecurity Analyst", avatar: "https://i.pravatar.cc/150?img=10", isFollowed: false },
    { id: 11, name: "James Johnson", bio: "DevOps Specialist", avatar: "https://i.pravatar.cc/150?img=11", isFollowed: false },
    { id: 12, name: "Emily Davis", bio: "Product Manager", avatar: "https://i.pravatar.cc/150?img=12", isFollowed: false },
  ]);

  // Theme State
  const [darkMode, setDarkMode] = useState(false);

  // Search State
  const [search, setSearch] = useState("");

  // Toggle Follow Status
  const toggleFollow = (id) => {
    setProfiles((prev) =>
      prev.map((profile) =>
        profile.id === id ? { ...profile, isFollowed: !profile.isFollowed } : profile
      )
    );
  };

  // Log follow/unfollow changes
  useEffect(() => {
    profiles.forEach((profile) => {
      console.log(`${profile.name} is ${profile.isFollowed ? "Followed" : "Unfollowed"}`);
    });
  }, [profiles]);

  // Filtered profiles based on search
  const filteredProfiles = profiles.filter((profile) =>
    profile.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <header className="header">
        <h1>Profile Cards</h1>
        <div className="controls">
          <input
            type="text"
            placeholder="Search profiles..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={() => setDarkMode((prev) => !prev)}>
            {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>
      </header>

      <div className="card-container">
        {filteredProfiles.map((profile) => (
          <ProfileCard
            key={profile.id}
            name={profile.name}
            bio={profile.bio}
            avatar={profile.avatar}
            isFollowed={profile.isFollowed}
            onToggleFollow={() => toggleFollow(profile.id)}
          />
        ))}
      </div>
    </div>
  );
}
