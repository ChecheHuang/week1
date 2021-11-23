import React from 'react'
import "./traffic.css"
export default function Traffic(props) {
    const { stepDisplay,stepInfo } = props
    // console.log(stepInfo)
    return (
        <>
            <div className="traffic">
                <p>*每隔五秒自動更新</p>
                <div className="trafficInfo">
                    {stepDisplay ?
                        <>
                           <div className="stepContainer">
                                <div class="stepArea">
                                        <div class="stepItem">
                                            未發車
                                        </div>
                                        <div class="stepText">港坪運動公園</div>
                                </div>
                                <div class="stepArea">
                                        <div class="stepItem">
                                            11:12
                                        </div>
                                        <div class="stepText">港坪運動公園</div>
                                </div>
                                <div class="stepArea">
                                        <div class="stepItem">
                                            未發車
                                        </div>
                                        <div class="stepText">港坪運動公園</div>
                                </div>
                                <div class="stepArea">
                                        <div class="stepItem">
                                            未發車
                                        </div>
                                        <div class="stepText">港坪運動公園</div>
                                </div>
                                <div class="stepArea">
                                        <div class="stepItem">
                                            未發車
                                        </div>
                                        <div class="stepText">港坪運動公園</div>
                                </div>
                                <div class="stepArea">
                                        <div class="stepItem">
                                            未發車
                                        </div>
                                        <div class="stepText">港坪運動公園</div>
                                </div>
                                <div class="stepArea">
                                        <div class="stepItem">
                                            未發車
                                        </div>
                                        <div class="stepText">港坪運動公園</div>
                                </div>
                                <div class="stepArea">
                                        <div class="stepItem">
                                            未發車
                                        </div>
                                        <div class="stepText">港坪運動公園</div>
                                </div>
                                <div class="stepArea">
                                        <div class="stepItem">
                                            未發車
                                        </div>
                                        <div class="stepText">港坪運動公園</div>
                                </div>
                                <div class="stepArea">
                                        <div class="stepItem">
                                            未發車
                                        </div>
                                        <div class="stepText">港坪運動公園</div>
                                </div>
                                <div class="stepArea">
                                        <div class="stepItem">
                                            未發車
                                        </div>
                                        <div class="stepText">港坪運動公園</div>
                                </div>
                                <div class="stepArea">
                                        <div class="stepItem">
                                            未發車
                                        </div>
                                        <div class="stepText">港坪運動公園</div>
                                </div>
                                <div class="stepArea">
                                        <div class="stepItem">
                                            未發車
                                        </div>
                                        <div class="stepText">港坪運動公園</div>
                                </div>
                                    
                           </div>

                        </>
                        : <div className="pleaseSelect">
                            請選擇公車路線
                        </div>
                    }

                    <div className="trafficShadow1"></div>
                    <div className="trafficShadow2"></div>
                </div>
            </div>
        </>
    )
}
