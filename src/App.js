import logo from './logo.svg';
import { useState, useEffect } from 'react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";
import './App.css';
import Anh from "../src/img/anh.jpg"
import Em from "../src/img/emm.jpg"
import Heart from "../src/img/heart.png"
import video1 from "../src/img/video1.mp4"
import video2 from "../src/img/video2.mp4"
import video3 from "../src/img/video3.mp4"
import video4 from "../src/img/video4.mp4"
import video5 from "../src/img/video5.mp4"
import video6 from "../src/img/video6.mp4"
import video7 from "../src/img/video7.mp4"
import video8 from "../src/img/video8.mp4"
import alohakorea from "../src/img/aloha.mp3"
import alohavn from "../src/img/aloha-loi-viet.mp3"
import don_gian_anh_yeu_em from "../src/img/don_gian_anh_yeu_em.mp3"
import prev from "../src/img/prev.svg"
import next from "../src/img/next.svg"
import play from "../src/img/play.svg"
import pause from "../src/img/pause.svg"
import { Modal, Button } from "react-bootstrap";

function App() {
  const [inputPassword, setInputPassword] = useState(""); 
  const [isAuthenticated, setIsAuthenticated] = useState(false); 

  const defaultPassword = "anhyeuphuong"; 
  const handleCheckPassword = () => {
    if (inputPassword === defaultPassword) {
      setIsAuthenticated(true); 
      toast.success("Xác thực thành công!");
    } else {
      toast.error("Mật khẩu không đúng!");
    }
  };
  function convertDaysToMonthsAndDays(dayCount) {
    const daysInMonth = 30; 
    const months = Math.floor(dayCount / daysInMonth);
    const days = dayCount % daysInMonth;
  
    return `${months} tháng ${days} ngày`;
  }
  const MusicPlayerContainer = styled.div`
  display: flex;
  align-items: center;
  background: #ffa4ce;
  border-radius: 8px;
  width: 350px;
  height: 100px;
`;

const Button = styled.button`
  background: none;
  border: none;
  color: #ff73af;
  cursor: pointer;
  margin: 0 5px;

  &:hover {
    color: red;
  }

  &:disabled {
    color: #555;
    cursor: not-allowed;
  }
`;

  const startDate = new Date("2024-09-17");
  const currentDate = new Date();
  const timeDiff = Math.abs(currentDate - startDate); 
  const dayCount = Math.ceil(timeDiff / (1000 * 60 * 60 * 24)); 
  const resultDate = convertDaysToMonthsAndDays(dayCount);
  console.log("Yeu duoc", dayCount, "ngay");
  console.log("Anh yêu Nguyễn Thị Phường nhiều lắmmmmmmmmmm")
  console.log(resultDate);
  
  const data = [
    {
    "url": "raw.githubusercontent.com",
    "id": 1,
    "content": "Đây là hôm tớ tỏ tình và được em đồng ý làm người yêu tớ 😊. Tớ vuii lắm 😊",
      "images": [
        {
          "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/buoi1-1.jpg",
          "id": "1"
        },
        {
          "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/buoi1-2.jpg",
          "id": "2"
        },
        {
          "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/buoi1-3.jpg",
          "id": "3"
        },
        {
          "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/buoi1-4.jpg",
          "id": "4"
        }
      ]
    },
    {
      "url": "raw.githubusercontent.com",
      "id": 2,
      "content": "Chúng tớ đi xem phim nè",
        "images": [
          {
            "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img1.jpg",
            "id": "1"
          },
          {
            "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img2.jpg",
            "id": "2"
          },
          {
            "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img3.jpg",
            "id": "3"
          },
          {
            "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img4.jpg",
            "id": "4"
          }
        ]
      },
      {
        "url": "raw.githubusercontent.com",
        "id": 3,
        "content": "Được em tổ chức sinh nhật cho tớ 🎂🙆‍♂️",
          "images": [
            {
              "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img18.jpg",
              "id": "1"
            },
          ]
        },
        {
          "url": "raw.githubusercontent.com",
          "id": 4,
          "content": "Lần đầu trong đời tớ được đi chụp photoboot, đặc biệt hơn là cùng em",
            "images": [
              {
                "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img25.jpg",
                "id": "1"
              },
              {
                "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img30.jpg",
                "id": "2"
              },
              {
                "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img27.jpg",
                "id": "3"
              },
              {
                "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img28.jpg",
                "id": "4"
              }, 
              {
                "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img29.jpg",
                "id": "5"
              },
              {
                "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img37.jpg",
                "id": "6"
              },
            ]
          },
          {
            "url": "raw.githubusercontent.com",
            "id": 5,
            "content": "Chúng tớ có nhiều kỉ niệm lắm đây nè",
              "images": [
                {
                  "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img5.jpg",
                  "id": "1"
                },
                {
                  "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img6.jpg",
                  "id": "2"
                },
                {
                  "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img7.jpg",
                  "id": "3"
                },
                {
                  "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img8.jpg",
                  "id": "4"
                }, 
                {
                  "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img9.jpg",
                  "id": "5"
                },
                {
                  "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img10.jpg",
                  "id": "6"
                },
                {
                  "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img12.jpg",
                  "id": "8"
                },   {
                  "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img14.jpg",
                  "id": "10"
                },  {
                  "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img15.jpg",
                  "id": "11"
                },  {
                  "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img16.jpg",
                  "id": "12"
                },  {
                  "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img17.jpg",
                  "id": "13"
                },  {
                  "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img19.jpg",
                  "id": "14"
                },  {
                  "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img20.jpg",
                  "id": "15"
                },  {
                  "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img21.jpg",
                  "id": "16"
                },  {
                  "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img22.jpg",
                  "id": "17"
                },  {
                  "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img23.jpg",
                  "id": "18"
                },  {
                  "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img24.jpg",
                  "id": "19"
                },  {
                  "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img10.jpg",
                  "id": "20"
                },  {
                  "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img31.jpg",
                  "id": "21"
                },  {
                  "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img32.jpg",
                  "id": "22"
                },  {
                  "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img33.jpg",
                  "id": "23"
                },  {
                  "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img34.jpg",
                  "id": "24"
                },  {
                  "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img35.jpg",
                  "id": "25"
                },
                {
                  "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img38.jpg",
                  "id": "26"
                },
                {
                  "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img39.jpg",
                  "id": "27"
                },
                {
                  "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img40.jpg",
                  "id": "28"
                },
                {
                  "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img41.jpg",
                  "id": "29"
                },
                {
                  "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img42.jpg",
                  "id": "30"
                },
                {
                  "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img43.jpg",
                  "id": "31"
                },
                {
                  "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img44.jpg",
                  "id": "32"
                },
                {
                  "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img45.jpg",
                  "id": "33"
                },
                {
                  "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img46.jpg",
                  "id": "34"
                },
                {
                  "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img47.jpg",
                  "id": "35"
                },
                {
                  "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img48.jpg",
                  "id": "36"
                },
                {
                  "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img49.jpg",
                  "id": "37"
                },
                {
                  "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img50.jpg",
                  "id": "38"
                },
                {
                  "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img51.jpg",
                  "id": "39"
                },
                {
                  "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img52.jpg",
                  "id": "40"
                },
                {
                  "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img53.jpg",
                  "id": "41"
                },
          

                //hi
                {
                  "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img54.jpg",
                  "id": "43"
                },  {
                  "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img55.jpg",
                  "id": "44"
                },   {
                  "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img57.jpg",
                  "id": "46"
                }, 
                {
                  "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img86.jpg",
                  "id": "46"
                },
                 {
                  "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img58.jpg",
                  "id": "47"
                },  {
                  "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img59.jpg",
                  "id": "48"
                },  {
                  "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img60.jpg",
                  "id": "49"
                },  {
                  "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img68.jpg",
                  "id": "57"
                },  {
                  "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img70.jpg",
                  "id": "59"
                },   {
                  "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img72.jpg",
                  "id": "61"
                },  {
                  "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img73.jpg",
                  "id": "62"
                },  {
                  "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img74.jpg",
                  "id": "63"
                },  {
                  "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img75.jpg",
                  "id": "64"
                },
                {
                  "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img96.jpg",
                  "id": "65"
                },
                {
                  "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img97.jpg",
                  "id": "1"
                },{
                  "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img98.jpg",
                  "id": "1"
                },
                {
                  "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img99.jpg",
                  "id": "1"
                },
              ]
            },
]
 const data2 = [
  {
    "url": "raw.githubusercontent.com",
    "id": 6,
    "content": "Đây nữa nè",
      "images": [
        {
          "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img87.jpg",
          "id": "1"
        },
        {
          "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img88.jpg",
          "id": "1"
        },{
          "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img89.jpg",
          "id": "1"
        },{
          "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img90.jpg",
          "id": "1"
        },{
          "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img91.jpg",
          "id": "1"
        },{
          "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img92.jpg",
          "id": "1"
        },{
          "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img93.jpg",
          "id": "1"
        },{
          "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img94.jpg",
          "id": "1"
        },{
          "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img95.jpg",
          "id": "1"
        },
        {
          "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img100.jpg",
          "id": "1"
        },
        {
          "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img101.jpg",
          "id": "1"
        },
        {
          "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img102.jpg",
          "id": "1"
        },
        {
          "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img103.jpg",
          "id": "1"
        }, {
          "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img104.jpg",
          "id": "1"
        }, {
          "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img105.jpg",
          "id": "1"
        }, {
          "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img106.jpg",
          "id": "1"
        }, {
          "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img107.jpg",
          "id": "1"
        }, {
          "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img108.jpg",
          "id": "1"
        }, {
          "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img109.jpg",
          "id": "1"
        }, {
          "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img110.jpg",
          "id": "1"
        }, {
          "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img111.jpg",
          "id": "1"
        },
        {
          "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img112.jpg",
          "id": "1"
        },
      ]
    },
 ]
 const dataKoreanSmall = [
  {
    "url": "raw.githubusercontent.com",
    "id": 77,
    "content": "Em yêu ở Hàn Quốc nè",
      "images": [
        {
          "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img113.jpg",
          "id": "1"
        },
        {
          "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img114.jpg",
          "id": "1"
        },{
          "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img115.jpg",
          "id": "1"
        },{
          "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img116.jpg",
          "id": "1"
        },
      ],
      "imagesTall": [
        {
          "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img117.jpg",
          "id": "1"
        },
        {
          "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img118.jpg",
          "id": "1"
        },
        {
          "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img119.jpg",
          "id": "1"
        },
        {
          "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img120.jpg",
          "id": "1"
        },
        {
          "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img121.jpg",
          "id": "1"
        },
        {
          "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img122.jpg",
          "id": "1"
        },
        {
          "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img123.jpg",
          "id": "1"
        },
        {
          "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img124.jpg",
          "id": "1"
        },
        {
          "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img125.jpg",
          "id": "1"
        },
        {
          "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img126.jpg",
          "id": "1"
        },
        {
          "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img127.jpg",
          "id": "1"
        },  {
          "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img128.jpg",
          "id": "1"
        },  {
          "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img129.jpg",
          "id": "1"
        },  {
          "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img130.jpg",
          "id": "1"
        },  {
          "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img131.jpg",
          "id": "1"
        },  {
          "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img132.jpg",
          "id": "1"
        },  {
          "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img133.jpg",
          "id": "1"
        },  {
          "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img134.jpg",
          "id": "1"
        },  {
          "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img135.jpg",
          "id": "1"
        },  {
          "url": "https://raw.githubusercontent.com/nguyenducthanh04/server-image/main/image/img136.jpg",
          "id": "1"
        },
      ]
    },
 ]
 const songs = [
  { name: "Aloha (Lời việt)", src: alohavn },
  { name: "Aloha", src: alohakorea },
  { name: "Đơn giản anh yêu em", src: don_gian_anh_yeu_em },
];

// Trạng thái
const [currentSongIndex, setCurrentSongIndex] = useState(0); // Index bài hát hiện tại
const [audio, setAudio] = useState(new Audio(songs[0].src)); // Đối tượng audio
const [isPlaying, setIsPlaying] = useState(false); // Trạng thái phát nhạc
// Xử lý phát/dừng nhạc
const handlePlayPause = () => {
  if (isPlaying) {
    audio.pause();
  } else {
    audio.play();
  }
  setIsPlaying(!isPlaying);
};

// Chuyển bài hát
const changeSong = (index) => {
  audio.pause(); // Dừng bài hát hiện tại
  const newAudio = new Audio(songs[index].src); // Tạo audio mới
  setAudio(newAudio); // Cập nhật audio
  setCurrentSongIndex(index); // Cập nhật index
  setIsPlaying(true); // Bắt đầu phát nhạc
  newAudio.play(); // Phát nhạc
};

const handleNext = () => {
  const nextIndex = (currentSongIndex + 1) % songs.length; // Vòng lặp danh sách
  changeSong(nextIndex);
};

const handlePrevious = () => {
  const prevIndex = (currentSongIndex - 1 + songs.length) % songs.length; // Vòng lặp danh sách
  changeSong(prevIndex);
}
const [showListModal, setShowListModal] = useState(false);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [selectedLetter, setSelectedLetter] = useState(null);

  // Danh sách các bức thư
  const letters = [
    { id: 1, title: "Ngày 08/02/2025", content: "Nay sinh nhật em bé, anh chúc em bé tuổi mới xinh đẹp hơn, thật nhiều niềm vui hạnh phúc, học tập ngày càng tốt hơn có được công việc ổn định hơn để em bé của anh bớt áp lực hơn với cuộc sống bên đó, anh thật sự xin lỗi em bé vì đã nói linh tinh lăng nhăng khiến em bé tức giận, anh sẽ sửa ngay cái tính suy nghĩ điên rồ này của anh để sẽ không có lần nào làm em bé của anh phải buồn nữa, anh sẽ cố gắng hết mình để đạt được mục tiêu đón em qua Đài Loan chơi cùng với anh, cũng cố gắng hết mình để có được một công việc ổn định tài chính để sẵn sàng cưới em bé về làm vợ, anh yêu em bé nhiều lắm, cảm ơn em bé rất nhiều❤️" },
    { id: 2, title: "Ngày 09/02/2025", content: "Hôm nay em bé chuyển ra trọ mới nè, mong rằng em bé sẽ luôn suôn sẻ ở chỗ ở mới này, anh sẽ cố gắng để sau này cho em bé cuộc sống tốt hơn, anh yêu em nhiều lắm" },
    { id: 3, title: "Ngày 11/02/2025", content: "Hôm nay em yêu của anh thi, anh bé chúc em yêuu thi thật tốt, làm bài thật tốt nhaaa, cố lên em yêu, anh yêu em nhiều lắmmm" },
    { id: 4, title: "Ngày 12/02/2025🥺", content: "Hôm nay buồn lắm, anh bảo là đi ngủ nhưng thật ra ngủ làm sao được chứ, bây giờ là 3h09 sáng, hôm nay biết em bé vừa thi xong hết nên là mới ngủ lại ở Hà Nội để có thể thức khuya hơn trò chuyện với em, tâm sự với em nhiều hơn chút mặc dù nay là rằm tháng giêng, nhà làm cỗ, mẹ anh bảo về ăn nhưng anh bảo mẹ là thôi, Thắng với Minh cũng rủ anh đi chơi ngay sau khi em tắt máy mà anh cũng từ chối, có dám đi đâu ạ, vì em bé bảo đợi em bé nghe máy bạn một tí mà, mình anh ở phòng chờ đợi tin nhắn cũng như cuộc gọi của em bé mà không thấy gì hết, không thấy em bé bảo gì với anh cả, thật sự buồn lắm nhưng có dám thể hiện ra đâu ạ vì em bé không thích mà, chỉ tự thấy buồn trong lòng thôi, nhưng cũng không sao ha vì yêu emm nên anh như nào cũng không sao ạ, anh yêu em bé lắm" },,
    {id: 5, title: "Ngày 22/02/2025", content: "Anh cảm thấy áp lực quá em bé ạ, rất nhiều thứ đổ dồn vào anh trong một khoảng thời gian ngắn, rất nhiều đồ án, tiếng Trung, tiếng Anh 31/07 phải nộp chứng chỉ, anh chẳng biết mình có được không nữa, dồn dập hết mọi thứ vào như này anh áp lực quá bé ơi, ước gì có em bé ở đây an ủi động viên anh, chỉ cần một cái ôm của bé thôi cũng được"},
    {id: 6, title: "Ngày 25/02/2025", content: "Nói sao nhỉ, chẳng biết tại sao em bé lại ghét việc trả lời tin nhắn anh như thế nữa, đi học về nhắn cho em rằng anh về an toàn rùi nè, mưa to nữa ướt hết, nhắn vậy chỉ mong nhận lại tin nhắn phản hồi của em thui, nhưng em có trả lời anh đâu, cũng chẳng phải em bận, tin nhắn vẫn thông báo đều em vẫn đang nhắn với bạn mà, sao không trả lời anh được một câu ngay vậy, nhìn em nhắn tin với bạn nhưng tin nhắn anh gửi em còn không trả lời, anh để ý nhiều lần em bé như thế rùi, cũng buồn, cũng tủi thân lắm"}
  ];

  // Mở modal nội dung thư
  const openDetailModal = (letter) => {
    setSelectedLetter(letter);
    setShowDetailModal(true);
  };
  return (
    <div className="App">
      {
        !isAuthenticated ? (
          <div className='form-password'>
          <h3>Nhập mật khẩu để truy cập:</h3>
          <input
            type="password"
            placeholder="Nhập mật khẩu"
            value={inputPassword}
            onChange={(e) => setInputPassword(e.target.value)}
            style={{height: "32px"}}
          />
          <button onClick={handleCheckPassword}>Xác nhận</button>
        </div>
        ) : (
          <div>
          <header className="App-header">
           <div class="scroll-text">
               Đây là nơi lưu trữ những kỉ niệm của chúng mình ❤
           </div>
           </header>
           <div className="App-body">
             <div className="couple">
               <h2>Đây Là Chúng Tớ</h2>
               <div className="meandhoney">
                 <div className='me'>
                   <img src={Anh}></img>
                   <h3>Anh</h3>
                 </div>
                 <div className='heart'>
                  <p>{dayCount} ngày</p>
                   <img src={Heart}></img>
                   <p>{resultDate}</p>
                 </div>
                 <div className='honey'>
                   <img src={Em}></img>
                   <h3>Em bé</h3>
                 </div>
               </div>
             </div>
             <div className="container mt-5">
             <Button variant="primary" className="custom-big-button" onClick={() => setShowListModal(true)}>
  📩 Thư gửi em bé
</Button>

      {/* Modal danh sách thư */}
      <Modal show={showListModal} onHide={() => setShowListModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>📜 Thư của Đức Thanh</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {letters.map((letter) => (
            <Button
              key={letter.id}
              variant="light"
              onClick={() => openDetailModal(letter)}
              className="d-block w-100 text-start mb-2"
            >
              {letter.title}
            </Button>
          ))}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowListModal(false)}>
            Đóng
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal nội dung thư */}
      <Modal show={showDetailModal} onHide={() => setShowDetailModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>📩 {selectedLetter?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{selectedLetter?.content}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDetailModal(false)}>
            Đóng
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
             <div style={{display: "flex", justifyContent: "center", marginTop:"40px"}}>
             <MusicPlayerContainer>
             <Button onClick={handlePrevious}><img src={prev}></img></Button>
             <Button onClick={handlePlayPause}>{isPlaying ? <img src={pause}></img> : <img src={play}></img>}</Button>
             <Button onClick={handleNext}><img src={next}></img></Button>
             <p>{songs[currentSongIndex].name}</p>
             </MusicPlayerContainer>
             <div>
              </div>
             </div>
             <div>
              {/* <p className='loi-anh-noi'>Anh càng ngày càng yêu em, em bé à, nhưng em biết không anh cũng càng ngày càng sợ mất em, rất rất sợ mất em, sợ một lúc nào đấy, khi mà anh đang rất yêu em thì em lại thôi anh lại xa anh, anh sợ lắm, em bé biết anh yêu em thật lòng mà, luôn muốn làm hết mọi việc để em được vui, để em biết rằng anh thương em lắm, yêu em lắm, nhưng gần đây mỗi lần mình có gì đó tranh cãi em luôn nói ra những lời khiến anh đau lòng, buồn chứ, anh nghĩ sao người yêu mình có thể nói như vậy với mình chứ, mình rất cố gắng mà chỉ là có những lỗi lầm nhỏ không thể tránh được, sao mình lại phải nghe những lời đó, từ lúc em nói với anh là "em nhả anh ra cho anh yêu người mới" lúc nào anh cũng suy nghĩ trong đầu là sợ em bỏ rơi anh, cố gắng học cũng chỉ để cơ hội gặp em lớn hơn, cao hơn, để mình sớm được gặp nhau, hiện giờ anh yêu em quá luỵ em quá anh không muốn mất đi em đâu, nếu em yêu anh xin em đừng làm thế với anh, anh cũng là một con người bình thường cũng khao khát có được tình yêu thương của nửa kia dành cho mình, anh không muốn là nửa kia mà anh yêu rất nhiều rồi lại rời anh đi đâu, anh sợ lắm</p> */}
             </div>
             <div>
              <p className="loi-anh-noi">Em bé à, anh chưa từng nghĩ rằng anh sẽ gặp được một người con gái mà khiến anh yêu say đắm đến vậy đâu, là em đấy, chính em là người đã cho anh có được cảm giác yêu và thương một người con gái bằng cả trái tim của mình, và cũng chính em là người đã khiến cho anh tin tưởng hơn vào tình yêu, anh luôn được em bé quan tâm lo lắng và chăm sóc cho anh, anh cảm thấy rất may mắn, từ khi yêu em trong đầu anh không một ngày nào anh không nghĩ đến em, ngay cả thời gian chúng ta được ở gần nhau cho đến hiện giờ chúng ta tạm xa nhau một chút xíu, lúc nào cũng chỉ nghĩ đến em, sáng nào cũng vậy mỗi khi anh thức dậy anh đều vào đi vào lại messenger để xem có tin nhắn nào của em bé hay không, để xem em bé của anh đã dậy chưa, càng ngày anh càng yêu em bé và cũng ngày càng sợ rằng một ngày nào đó em bé không ở bên anh nữa, anh rất sợ, anh luôn muốn bản thân cố gắng để làm một người yêu thương em hết lòng, làm một người mà em có thể tin tưởng ở bên, anh luôn cố gắng để người khác phải ghen tị với em, anh luôn muốn bên cạnh em bảo vệ và chăm sóc em nhưng có lẽ anh phải đợi cho đến sau này để bù đắp lại hết những gì mà hiện giờ anh không làm được cho em bé của anh, anh không biết sao nhưng anh không giống bất kì một thằng con trai nào, khi anh yêu em anh luôn muốn rằng em phải hạnh phúc khi yêu anh và thật sự anh rất muốn em sẽ ở bên anh mãi về sau này, anh không muốn mất em, chẳng muốn xa em chút nào cả, từ khi em bé bay sang Hàn anh thấy nhớ em bé rất nhiều, anh khóc rất nhiều, khóc vì nhớ em, khóc vì anh không làm được gì mỗi khi em kêu mệt, anh chỉ biết động viên em qua những lời nói. Anh xin lỗi vì không giúp được gì cho em bé ở thời điểm hiện tại, anh mong em bé sẽ yêu anh mãi, để sau này anh được bù đắp cho em bé những gì mà hiện giờ anh không làm được cho em, mong em hiểu cho anh, anh yêu em bé nhiều lắm 🥰</p>
             </div>
             <div className='all-img'>
               <div className='title-img-all'>
                 <h2>Dưới đây là kỉ niệm của chúng tớ </h2>
               </div>
               {data?.map((dataItem) => (
             <div className='item' key={dataItem.id}>
                 <div className='content'>
                   <p>{dataItem.content}</p>
                   {dataItem?.images?.map((img) => (
                     <img key={img.id} src={img.url}></img>
                   ))}
                 </div>
             </div>
               ))}
              
             </div>
          {data2?.map((data2List) => (
               <div className='emiu' key={data2List.id}>
               <div className='emiu-content'>
                 <p>{data2List.content}</p>
                 {data2List?.images?.map((img) => (
                    <img key={img.id} src={img.url}></img>
                 ))}
               </div>
              </div>
          ))}
             <div className='videoo-em-iu'>
             <div className='title-video'>
               <h2>Khoảnh khắc của tụi tớ</h2>
             </div>
               <div className='all-video'>
                 <div className='video-container'>
                 <video controls width={"300px"} height={"300px"}>
                   <source src={video1} type="video/mp4" />
                   Trình duyệt của bạn không hỗ trợ video.
                   </video>
             </div>
             <div className='space'></div>
             <div className='video-container'>
             <video controls width={"300px"} height={"300px"}>
               <source src={video2} type="video/mp4" />
               Trình duyệt của bạn không hỗ trợ video.
             </video>
             </div>
             <div className='space'></div>
             <div className='video-container'>
             <video controls width={"300px"} height={"300px"}>
               <source src={video3} type="video/mp4" />
               Trình duyệt của bạn không hỗ trợ video.
             </video>
             </div>
             <div className='space'></div>
             <div className='video-container'>
             <video controls width={"300px"} height={"300px"}>
               <source src={video4} type="video/mp4" />
               Trình duyệt của bạn không hỗ trợ video.
             </video>
             </div>
             <div className='space'></div>
             <div className='video-container'>
             <video controls width={"300px"} height={"300px"}>
               <source src={video5} type="video/mp4" />
               Trình duyệt của bạn không hỗ trợ video.
             </video>
             </div>
             <div className='space'></div>
             <div className='video-container'>
             <iframe width="300" height="300" 
        src="https://www.youtube.com/embed/4Cj9T_2Rwro" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
        </iframe>
             </div>
             <div className='space'></div>
             <div className='video-container'>
    <iframe 
        width="300" 
        height="300" 
        src="https://www.youtube.com/embed/iMmeoF0dj28" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
    </iframe>
</div>
<div className='space'></div>
             <div className='video-container'>
             <video controls width={"300px"} height={"300px"}>
               <source src={video6} type="video/mp4" />
               Trình duyệt của bạn không hỗ trợ video.
             </video>
             </div>
             <div className='space'></div>
             <div className='video-container'>
             <video controls width={"300px"} height={"300px"}>
               <source src={video7} type="video/mp4" />
               Trình duyệt của bạn không hỗ trợ video.
             </video>
             </div>
             <div className='space'></div>
             <div className='video-container'>
             <video controls width={"300px"} height={"300px"}>
               <source src={video8} type="video/mp4" />
               Trình duyệt của bạn không hỗ trợ video.
             </video>
             </div>
               </div>
             </div>
             <div className='embe-in-korean'>
           {dataKoreanSmall?.map((datakoreansmall) => (
               <div className='content-korea' key={datakoreansmall.id}>
               <p>{datakoreansmall.content}</p>
               {datakoreansmall.images?.map((hi) => (
               <img key={hi.id} src={hi.url} className='img-small'></img>
               ))}
               {datakoreansmall.imagesTall?.map((imgtall) => (
                <img key={imgtall.id} src={imgtall.url} className='img-tall'></img>
               ))} 
             </div>
           ))}
             </div>
             <div className='xiang'>
               <em>Anh mong em sẽ luôn đồng hành và ở bên anh mãi về sau bởi vì em biết đó anh rất trân trọng em cũng như mối quan hệ này của hai taaaa 🥰. Cũng mong rằng mỗi khi em bé buồn hay chán nản em bé có thể tâm sự cùng anh và vào lại đây để xem lại những kỉ niệm đẹp của đôi taa 🥰</em>
             </div>
           </div>
          </div>
        )
      }
    <ToastContainer />
    </div>
  );
}

export default App;
