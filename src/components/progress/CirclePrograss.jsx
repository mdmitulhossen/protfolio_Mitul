import { CircularProgressbar } from "react-circular-progressbar";


const CirclePrograss = ({value=0,name}) => {
    return (
        <div className="flex flex-col gap-3 items-center">
            <CircularProgressbar
                styles={{
                    root: {},
                    path: {                      
                      stroke: ' #F6B846',
                        transition: 'stroke-dashoffset 0.5s ease 0s',

                        transform: 'rotate(0.25turn)',
                        transformOrigin: 'center center',
                    },

                    trail: {
                        stroke: '#3E4148',
                        transform: 'rotate(0.25turn)',
                        transformOrigin: 'center center',
                    },
                    text: {
                        fill: '#fff',
                        fontSize: '22px',
                    },
                    background: {
                        fill: '#F6B846',
                    },
                }}
                value={value} text={`${value}%`} className="text-white"
            />
            <p className="text-white text-lg">{name}</p>
        </div>
    );
};

export default CirclePrograss;