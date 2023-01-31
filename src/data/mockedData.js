import RandallPhoto from "../assets/userPhotos/Randall.png"
import KristingePhoto from "../assets/userPhotos/Kristinge.png"
import CarolinePhoto from "../assets/userPhotos/Caroline.png"
import AdamPhoto from "../assets/userPhotos/Adam.png"
import MargarethPhoto from "../assets/userPhotos/Margareth.png"
import Folder from "../assets/Folder.png"
import Video from "../assets/Video.png"
import Image from "../assets/Image.png"

export const mockedData = [
  { id: 1,  name: "Randall Johnsson",                 imgSrc: RandallPhoto,     type: "user",   link: "https://www.google.com",   lastLogin: "Active now",          status: "online" },
  { id: 2,  name: "Kristinge Karand",                 imgSrc: KristingePhoto,   type: "user",   link: "https://www.google.com",   lastLogin: "Active 2d ago",       status: "away" },
  { id: 3,  name: "Caroline Dribsson",                imgSrc: CarolinePhoto,    type: "user",   link: "https://www.google.com",   lastLogin: "Unactivated",         status: "Unactivated" },
  { id: 4,  name: "Adam Cadribean",                   imgSrc: AdamPhoto,        type: "user",   link: "https://www.google.com",   lastLogin: "Active 1w ago",       status: "away" },
  { id: 5,  name: "Margareth Cendribgseen",           imgSrc: MargarethPhoto,   type: "user",   link: "https://www.google.com",   lastLogin: "Active 1w ago",       status: "away" },
  { id: 6,  name: "Random Michal Folder",             imgSrc: Folder,           type: "file",   link: "https://www.google.com",      folder: "Photos",          lastUpdate: "Edited 12m ago" },
  { id: 7,  name: "creative_file_frandkies.jpg",      imgSrc: Image,            type: "file",   link: "https://www.google.com",      folder: "Photos/Assets",   lastUpdate: "Edited 12m ago" },
  { id: 8,  name: "files_krande_michelle.avi",        imgSrc: Video,            type: "file",   link: "https://www.google.com",      folder: "Videos",          lastUpdate: "Added 12m ago" },
  { id: 9,  name: "final_dribbble_presentation.jpg",  imgSrc: Image,            type: "file",   link: "https://www.google.com",      folder: "Presentations",   lastUpdate: "Edited 1w ago" },
  { id: 10, name: "dribbble_animation.avi",           imgSrc: Video,            type: "file",   link: "https://www.google.com",      folder: "Videos",          lastUpdate: "Added 1y ago" },
  { id: 11, name: "Dribbble Folder",                  imgSrc: Folder,           type: "file",   link: "https://www.google.com",      folder: "Projects",        lastUpdate: "Edited 2m ago" },
]