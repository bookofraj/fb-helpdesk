import React from 'react'
import '../styles/styles.css'
import './styles.css'
import RPlogo from '../Assets/RP-logo.png'
import defaultDP from '../Assets/defaultDP.webp'

function AgentScreen() {
    return (
        <div className="box">
            <div className="side-panel">
                <div>
                    <img src={RPlogo} alt="Richpanel Logo" style={{ width: "35px" }} />
                    <form action="">

                        <input className="invisible" id='inbox-btn' type="radio" checked={true} />
                        <label htmlFor="inbox">
                            <span class="material-symbols-outlined">
                                inbox
                            </span>
                        </label>

                        <input className="invisible" id='group' type="radio" checked={false} />
                        <label htmlFor="group">
                            <span class="material-symbols-outlined">
                                group
                            </span>
                        </label>

                    </form>
                </div>

                <div className="dp">
                    <img src={defaultDP} alt="DP" style={{ width: "40px" }} />
                </div>
            </div>

            <div className="list">
                <div className='heading'>
                    <div className='leftish'>
                    <span class="material-symbols-outlined">
                        menu_open
                    </span>
                    <h3>Conversations</h3>
                    </div>
                    <span class="material-symbols-outlined">
                        refresh
                    </span>
                </div>

                <div>{/* Will Render Conversation Lists Here */}</div>

            </div>
            <div className="main">Main</div>
            <div className="info-panel">Info-Panel</div>
        </div>
    )
}

export default AgentScreen