const users = [
  {
    username: "priya_sharma",
    profilePhoto: "https://i.pravatar.cc/150?img=1",
    video: "./reels/video1.mp4",
    isLiked: true,
    likeCount: 1240,
    commentCount: 86,
    shareCount: 32,
    isFollow: true,
    caption: "Just enjoying the little moments ✨"
  },
  {
    username: "rahul_verma",
    profilePhoto: "https://i.pravatar.cc/150?img=2",
video: "https://www.pexels.com/download/video/15034914/",
    isLiked: false,
    likeCount: 856,
    commentCount: 42,
    shareCount: 18,
    isFollow: false,
    caption: "Good vibes and better days 🌿"
  },
  {
    username: "ananya_gupta",
    profilePhoto: "https://i.pravatar.cc/150?img=3",
    video: "https://www.pexels.com/download/video/26606484/",
    isLiked: true,
    likeCount: 2345,
    commentCount: 124,
    shareCount: 67,
    isFollow: true,
    caption: "Making memories one day at a time ❤️"
  },
  {
    username: "arjun_mehta",
    profilePhoto: "https://i.pravatar.cc/150?img=4",
    video: "https://www.pexels.com/download/video/10059190/",
    isLiked: false,
    likeCount: 643,
    commentCount: 29,
    shareCount: 11,
    isFollow: false,
    caption: "Keep moving forward 🚀"
  },
  {
    username: "neha_kapoor",
    profilePhoto: "https://i.pravatar.cc/150?img=5",
    video: "https://www.pexels.com/download/video/35221464/",
    isLiked: true,
    likeCount: 3180,
    commentCount: 156,
    shareCount: 89,
    isFollow: true,
    caption: "A little sunshine never hurts ☀️"
  },
  {
    username: "rohan_singh",
    profilePhoto: "https://i.pravatar.cc/150?img=6",
    video: "https://www.pexels.com/download/video/39213808/",
    isLiked: false,
    likeCount: 921,
    commentCount: 51,
    shareCount: 24,
    isFollow: false,
    caption: "Life is better when you enjoy the journey."
  },
  {
    username: "ishita_malhotra",
    profilePhoto: "https://i.pravatar.cc/150?img=7",
    video: "https://www.pexels.com/download/video/36745295/",
    isLiked: true,
    likeCount: 1765,
    commentCount: 73,
    shareCount: 45,
    isFollow: true,
    caption: "Creating my own kind of happiness 🌸"
  },
  {
    username: "aditya_rao",
    profilePhoto: "https://i.pravatar.cc/150?img=8",
    video: "https://www.pexels.com/download/video/39152727/",
    isLiked: false,
    likeCount: 512,
    commentCount: 21,
    shareCount: 9,
    isFollow: false,
    caption: "Work hard. Stay humble. 💯"
  },
  {
    username: "simran_khan",
    profilePhoto: "https://i.pravatar.cc/150?img=9",
    video: "https://www.pexels.com/download/video/13600150/",
    isLiked: true,
    likeCount: 2890,
    commentCount: 137,
    shareCount: 72,
    isFollow: true,
    caption: "Lost in the moment 🌙"
  },
  {
    username: "vikas_jain",
    profilePhoto: "https://i.pravatar.cc/150?img=10",
    video: "https://www.pexels.com/download/video/38299669/",
    isLiked: false,
    likeCount: 734,
    commentCount: 38,
    shareCount: 16,
    isFollow: false,
    caption: "Sometimes you just need to enjoy the view."
  }
];
 
var sum = '';
users.forEach(function(elem){
  sum += `<div class="Reels">
          <video  autoplay loop muted src=${elem.video}></video>
          <div class="bottom">
            <div class="user">
              <img src=${elem.profilePhoto} alt="">
              <h4>${elem.username}</h4>
              <button>${elem.isFollow?"Following":"Follow"}</button>
            </div>
            <h3>${elem.caption}</h3>
          </div>
          <div class="right">
            <div class="like">
              <h4 class="like-icon">${elem.isLiked?`<i class="love ri-heart-3-fill"></i>`: `<i class="ri-poker-hearts-line"></i>`}</h4>
              <h6>${elem.likeCount}</h6>
            </div>

          <div class="comment">
            <h4 class="comment-icon"><i class="ri-chat-3-line"></i></h4>
            <h6>${elem.commentCount}</h6>
          </div>

          <div class="share">
            <h4 class="share-icon"><i class="ri-share-forward-line"></i></h4>
            <h6>${elem.shareCount}</h6>
          </div>

          <div class="menu">
            <h4 class="menu-icon"><i class="ri-more-2-fill"></i></h4>
          </div>
          </div>

        </div>`
})

var button = document.querySelector('button');
var allReels = document.querySelector('.allReels');
allReels.innerHTML = sum;
console.log("Hello");


button.addEventListener('click',function(){
  if(isFollow){
    button.innerHTML = Follow;
  }else{
    button.innerHTML = Following;
  }
})