import React from 'react';

const Sidebar = () => {
  return (
    <div className="w-64 h-screen p-5 bg-blue-900">
      {/* Profile Section */}
      <div className="mb-8">
        <h2 className="text-lg font-bold mb-4">PROFILE</h2>
        <div className="flex items-center mb-2">
          <span role="img" aria-label="birthday" className="mr-2">🎂</span>
          <p>19/11/1999</p>
        </div>
        <div className="flex items-center mb-2">
          <span role="img" aria-label="gender" className="mr-2">🚺</span>
          <p>Nữ</p>
        </div>
        <div className="flex items-center mb-2">
          <span role="img" aria-label="location" className="mr-2">📍</span>
          <p>TP. Hồ Chí Minh</p>
        </div>
        <div className="flex items-center">
          <span role="img" aria-label="school" className="mr-2">🏫</span>
          <p>Đại học Kiến Trúc TP. Hồ Chí Minh</p>
        </div>
      </div>

      {/* Interests Section */}
      <div>
        <h2 className="text-lg font-bold mb-4">INTERESTS</h2>
        <div className="flex flex-wrap gap-4">
          <div className="flex flex-col items-center">
            <span role="img" aria-label="cinema">🎫</span>
            <p className="text-sm">Vé</p>
          </div>
          <div className="flex flex-col items-center">
            <span role="img" aria-label="music">🎵</span>
            <p className="text-sm">Âm nhạc</p>
          </div>
          <div className="flex flex-col items-center">
            <span role="img" aria-label="reading">📚</span>
            <p className="text-sm">Đọc sách</p>
          </div>
          <div className="flex flex-col items-center">
            <span role="img" aria-label="bubble tea">🧋</span>
            <p className="text-sm">Trà Sữa</p>
          </div>
          <div className="flex flex-col items-center">
            <span role="img" aria-label="decor">🎨</span>
            <p className="text-sm">Trang trí</p>
          </div>
          <div className="flex flex-col items-center">
            <span role="img" aria-label="movies">🎬</span>
            <p className="text-sm">Xem phim</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
