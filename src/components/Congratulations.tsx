import React from 'react';
import cloud from '../img/cloud.gif';

const Congratulations = () => {
    return (
        <>
            <div className="container py-7" id="congratulations">
                <div className="custom-card row">
                    <div className="col-6">
                        <img className={"w-100"} src={cloud} alt="Cloud"/>
                    </div>
                    <div className="col-6 d-flex justify-content-center flex-column">
                        <div className="congratulations-title text-center pb-3">
                            С Днем рождения!
                        </div>
                        <div className="congratulations-text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus qui recusandae sed tempore ut. Accusantium aliquid commodi debitis earum error eum, explicabo, facere fuga, in ipsa nisi nostrum nulla perspiciatis possimus quos reiciendis sed suscipit tenetur. Aut distinctio dolore eaque ipsam nobis pariatur possimus quaerat repellat, sapiente, sequi tempore veritatis? Consectetur debitis eveniet impedit incidunt ipsum obcaecati voluptate voluptates? A ad alias aliquid aperiam, architecto assumenda cumque debitis deserunt dolores doloribus eum exercitationem itaque iure, magni odio odit omnis quo repellendus, reprehenderit sed tempora veniam veritatis? Aperiam deserunt perferendis quis sapiente tempore voluptate voluptatibus! Atque cum hic molestiae omnis sunt!
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Congratulations;