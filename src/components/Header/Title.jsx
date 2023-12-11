

const Title = ({title}) => {

    const firstLetter = title.charAt(0);
    const restOfWord = title.slice(1);


    return (
        <div className="relative">
            <h1 id='text' className="text-white font-bold text-2xl">
                <span className="text-[#F6B846]">{firstLetter}</span>
                {restOfWord}
            </h1>
            <div 
            style={{
                background:'linear-gradient(135deg,rgba(246,184,70,.4) 0%,rgba(246,184,70,.01) 100%)'
            }}
            className="w-[30px] h-[30px] rounded-full absolute top-1 -left-2">

            </div>
        </div>
    );
};

export default Title;