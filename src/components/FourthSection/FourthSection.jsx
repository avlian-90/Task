import React from "react";
import Clock from "../../assets/clock.png";
import Productivity from "../../assets/productivity.png";
import Task from "../../assets/task.png";
import Chat from "../../assets/chat.png";
import Tools from "../../assets/tools.png";
import Checked2 from "../../assets/checked2.png";
import Tab from "../../assets/tab.png";
import Chart from "../../assets/chart.png";
import "./FourthSection.css"

export default function FourthSection() {
  return (
    <div className="fourth-section">
        <h2 className="title fts__title">
            <p>Save Big on All Features</p>
            <p className="yellow">no exceptions</p>
        </h2>
        <div className="container feature__container">
            <div className="feature__tabs">
                <div className="feature__tabs_header">
                    <div className="feature__tab_switch active">
                        <img src={Clock} alt="clock"/>
                        <p className="feature__tab_title">Time Tracking with Screenshots</p>
                    </div>
                    <div className="feature__tab_switch">
                        <img src={Productivity} alt="productivity"/>
                        <p className="feature__tab_title">Productivity
                            Monitoring</p>
                    </div>
                    <div className="feature__tab_switch">
                        <img src={Task} alt="task"/>
                        <p className="feature__tab_title">Task
                            Management</p>
                    </div>
                    <div className="feature__tab_switch">
                        <img src={Chat} alt="chat"/>
                        <p className="feature__tab_title">Communication
                            Channels</p>
                    </div>
                    <div className="feature__tab_switch">
                        <img src={Tools} alt="hr"/>
                        <p className="feature__tab_title">HR
                            Tools</p>
                    </div>
                    <div className="feature__tab_switch">
                        <img src={Chart} alt="chart"/>
                        <p className="feature__tab_title">Online
                            Reports</p>
                    </div>

                </div>
                <div className="feature__tabs_indicator">
                    <div></div>
                </div>
                <div className="feature__tabs_body">
                    <div className="feature__tab active">
                        <div className="feature__tab_info">
                            <h3 className="feature__tab_heading">Track the time your employees spend on work and get
                                detailed information</h3>
                            <div className="feature__tab_tick">
                                <img src={Checked2} alt="greentick"/>
                                <p>4 Screenshot Modes</p>
                            </div>
                            <div className="feature__tab_tick">
                                <img src={Checked2} alt="greentick"/>
                                <p>Idle Time Tracking</p>
                            </div>
                            <div className="feature__tab_tick">
                                <img src={Checked2} alt="greentick"/>
                                <p>Synchronized Tracking</p>
                            </div>
                            <div className="feature__tab_tick">
                                <img src={Checked2} alt="greentick"/>
                                <p>Billable Hours</p>
                            </div>
                            <button className="feature__tab_btn">
                                RESERVE YOUR SEAT
                            </button>
                        </div>
                        <div className="feature__tab_imageblock">
                            <img className="feature__tab_image" src={Tab} alt="tabphoto"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}