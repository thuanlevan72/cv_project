import figma from "./assets/images/Skills/figma.png";
import sketch from "./assets/images/Skills/sketch.png";
import ps from "./assets/images/Skills/ps.png";
import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import python from "./assets/images/Skills/python.png";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    id: 1,
    title: "Web Developer",
    firstName: "LÊ VĂN",
    LastName: "THUẬN",
    btnText: "Xem Ngay",
    image:
      "https://antimatter.vn/wp-content/uploads/2022/05/anh-gif-co-be-trong-long-kinh.gif",
    heroContent: [
      {
        count: "2+",
        text: "Năm kinh nghiệp trong làm Web",
      },
      {
        count: "12+",
        text: "Dự án đã làm trong sự nghiệp của tôi",
      },
    ],
  },
  skills: {
    title: "Kỹ Năng",
    subtitle: "KỸ NĂNG HÀNG ĐẦU CỦA TÔI",
    skills_content: [
      {
        name: "Figma",
        para: "Thiết kế các giao diện về web trên figma",
        logo: figma,
      },
      {
        name: "Node js",
        para: "Sử dụng Node.js để phát triển các ứng dụng back-end",
        logo: nodejs,
      },
      {
        name: "Adobe Photoshop",
        para: "Cắt giao diện web",
        logo: ps,
      },
      {
        name: "React js",
        para: "Code FrontEnd Cho trang Web",
        logo: reactjs,
      },
      {
        name: "Angular 2",
        para: "Xây dựng các ứng dụng web động hiện đại",
        logo: sketch,
      },
      {
        name: "Python",
        para: "Học Chuyên Sâu về giải thuật",
        logo: python,
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Lĩnh Vực",
    subtitle: "Tôi CÓ Thể Làm",
    service_content: [
      {
        title: "Phát triển web",
        para: "Xây dựng trang web động, web ứng dụng (web app), cửa hàng trực tuyến (e-commerce) hoặc blog cá nhân",
        logo: services_logo1,
      },
      {
        title: "ui / ux DESIGNING",
        para: "Thiết kế giao diện người dùng (UI) và trải nghiệm người dùng (UX) cho các trang web, ứng dụng web hoặc sản phẩm khác",
        logo: services_logo2,
      },
      {
        title: "PhotoShop Editing",
        para: "sử dụng Photoshop để tạo các mẫu trang web, định hình lại các hình ảnh và thiết kế các phần tử đồ họa khác trên trang web",
        logo: services_logo3,
      },
    ],
  },
  Projects: {
    title: "Dự Án",
    subtitle: "MY CREATION",
    image:
      "https://antimatter.vn/wp-content/uploads/2022/05/anh-gif-co-be-trong-long-kinh.gif",
    project_content: [
      {
        title: "MemId",
        image:
          "https://th.bing.com/th/id/R.ba5cb5ad398e3623536c060bcbdac29e?rik=gakRUJQ1VwQQ4A&pid=ImgRaw&r=0",
      },
      {
        title: "DIDONGVIET",
        image:
          "https://hrchannels.com/Upload/avatar/20220624/111905828_logoDDVnew.png",
      },
      // {
      //   title: "Creative Website",
      //   image: project3,
      // },
    ],
  },
  Testimonials: {
    title: "Lời BÌnh",
    subtitle: "Họ Nói Về Tôi",
    testimonials_content: [
      {
        review: "“anh ấy là 1 người rất chi là sạo quần”",
        img: "https://c4.wallpaperflare.com/wallpaper/410/558/539/anime-anime-girls-underboob-liang-xing-wallpaper-preview.jpg",
        name: "Trần Minh Quân",
      },
      {
        review: "“anh ấy là 1 người làm thì ít mà đi copy thì nhiều”",
        img: "https://c4.wallpaperflare.com/wallpaper/138/378/568/wlop-violet-evergarden-anime-anime-girls-wallpaper-preview.jpg",
        name: "Trần Minh Quân",
      },
      {
        review: "“anh ấy là 1 người không chỉ hay thích chỉ huy",
        img: "https://c4.wallpaperflare.com/wallpaper/227/583/604/anime-anime-girls-digital-art-artwork-2d-hd-wallpaper-preview.jpg",
        name: "Trần Minh Quân",
      },
      {
        review: "“anh ấy rất thông minh đó là ai nói chứ tôi không nghĩ vậy”",
        img: "https://c4.wallpaperflare.com/wallpaper/617/733/79/anime-anime-girls-aoi-ogata-wallpaper-preview.jpg",
        name: "Trần Minh Quân",
      },
    ],
  },
  Hireme: {
    title: "Nói về tôi",
    subtitle: "Nhận Xét Của Tôi",
    image1:
      "https://antimatter.vn/wp-content/uploads/2022/05/anh-gif-co-be-trong-long-kinh.gif",
    image2:
      "https://antimatter.vn/wp-content/uploads/2022/05/anh-gif-co-be-trong-long-kinh.gif",
    para: " là một lập trình viên fullstack với nhiều kinh nghiệm trong việc phát triển các ứng dụng web. Tôi có kỹ năng sử dụng các công nghệ như React, Vue, Angular, PHP, JavaScript, C#, .NET, Java, Spring và nhiều công nghệ khác để tạo ra các ứng dụng web tuyệt vời. Tôi có kinh nghiệm trong việc phát triển các ứng dụng web từ đơn giản đến phức tạp, với khả năng làm việc độc lập hoặc làm việc nhóm. Tôi luôn cố gắng học hỏi và cải thiện kỹ năng lập trình của mình để mang đến những sản phẩm tốt nhất cho khách hàng của mình.",
    btnText: "Check Ngay",
  },
  Contact: {
    title: "Liên Hệ",
    subtitle: "Thông Tin Để Lại",
    social_media: [
      {
        text: "thuanlevan72@gmail.com",
        icon: GrMail,
        link: "thuanlevan72@gmail.com",
      },
      {
        text: "+84 352 988 596",
        icon: MdCall,
        link: "84 352 988 596",
      },
      {
        text: "éo có đâu",
        icon: BsInstagram,
        link: "éo có đâu",
      },
    ],
  },
  Footer: {
    text: "Tất Cả Đã Kết Thúc Tại Đây",
  },
};
