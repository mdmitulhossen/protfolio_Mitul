import userpic from '../assets/user.jpg'
const ProfileCard = () => {
    return (
        <div className="w-full shadow-2xl h-[80%] bg-[#222222] rounded-md overflow-hidden relative ">
            <div className="img-container"></div>
            <div className="absolute h-3/5 bg-[#222222] bottom-0 w-full rounded-t-[27%]">
            </div>
            <div className="absolute w-[200px] top-1/2 -translate-y-3/4 left-1/2 -translate-x-1/2 h-[200px] bg-[#F8B947] rounded-full">
              <img className="w-full h-full rounded-full" src={userpic} alt="" />
            </div>
        </div>
    );
};

export default ProfileCard;