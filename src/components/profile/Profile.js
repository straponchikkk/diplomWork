import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import "./Profile.css";

const Profile = () => {
  const { user } = useAuth();
  const [resume] = useState({
    name: "Лука",
    employmentType: "Полная",
    workDays: "Полный день",
    position: "Бюджетный контролер",
  });

  return (
    <div className="profile-container">
      <h1 className="profile-header">Мои резюме</h1>

      <div className="resume-info">
        <div className="resume-details">
          <p className="resume-name">{resume.name}</p>
          <p className="resume-employment">{resume.employmentType}</p>
          <p className="resume-workdays">{resume.workDays}</p>
        </div>
        <div className="resume-position">
          <p className="resume-title">{resume.position}</p>
        </div>
      </div>

      <div className="resume-actions">
        <button className="resume-btn">Редактировать</button>
        <button className="resume-btn">Скачать</button>
      </div>
    </div>
  );
};

export default Profile;
