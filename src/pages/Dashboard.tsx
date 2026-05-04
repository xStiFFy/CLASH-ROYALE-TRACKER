import levelSymbol from '../assets/level_symbol.png'
import arena from '../assets/arenas/Barbarian_Bowl.webp'
import trophy from '../assets/trophy.png'
import rank from '../assets/ranks/Grand_Champion.avif'
import './Dashboard.css'
import '../index.css'
import { NavLink } from "react-router-dom"

function Dashboard() {

    return (
        <main className="dashboard">
            <header className="dashboardHeader">
                <div className="playerLevelDashboard">
                    <img src={levelSymbol} className="headerContent" id="levelPNG" width="450" height="300" alt="" />
                    <h1 className="headerContent" id="levelText" data-text="000">000</h1>
                </div>
                <div className="playerNameDashboard">
                    <h2 className="headerContent" >__PLACEHOLDER_NAME__</h2>
                </div>
            </header>

            <nav className="toolbar" id="mainToolbar">
                <ul>
                    <li>
                        <NavLink to="/analytics" className="toolbarButton">
                            ANALYTICS
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/matchups" className="toolbarButton">
                            MATCHUPS
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/" end className="toolbarButton">
                            HOME
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/deck-builder" className="toolbarButton">
                            DECK_BUILDER
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/settings" className="toolbarButton">
                            SETTINGS
                        </NavLink>
                    </li>
                </ul>
            </nav>

            <section className="mainContent">

                <div className="leftSideContent">

                    <section className="infoBlock" id="trophyRoadBlock">
                        <div className="blockHeader" id="trophyRoadBlockHeader">
                            <h3 className="blockHeaderTitle" id="trophyRoadBlockHeaderTitle">
                                TROPHY_ROAD
                            </h3>
                            <img src={arena} className="blockHeaderImage" id="trophyRoadBlockHeaderImage" />
                        </div>

                        <div className="blockInfo" id="trophyRoadBlockInfo">
                            <div className="infoRow">
                                <img src={trophy} className="statImage" />
                                <p className="stat">TROPHIES: </p>
                            </div>

                            <div className="infoRow">
                                <p className="stat">ARENA: </p>
                            </div>
                        </div>
                    </section>

                    <section className="infoBlock" id="rankedBlock">
                        <div className="blockHeader" id="rankedBlockHeader">
                            <h3 className="blockHeaderTitle" id="rankedBlockHeaderTitle">
                                RANKED
                            </h3>
                            <img src={rank} className="blockHeaderImage" id="rankedBlockHeaderImage" />
                        </div>

                        <div className="blockInfo" id="rankedBlockInfo">
                            <div className="infoRow">
                                <img src={rank} className="statImage" />
                                <p className="stat">PREVIOUS_SEASON:</p>
                            </div>

                            <div className="infoRow">
                                <img src={rank} className="statImage" />
                                <p className="stat">BEST_SEASON:</p>
                            </div>

                            <div className="infoRow">
                                <img src={rank} className="statImage" />
                                <p className="stat">CURRENT_SEASON:</p>
                            </div>
                        </div>
                    </section>

                </div>

                <div className="rightSideContent">

                    <section className="charts">
                        <div className="chart" id="bestMatchupsChart">
                            <h1>BEST_MATCHUPS</h1>
                            <p> -- the chart will go here once the code for a dynamic chart is developed -- </p>
                        </div>

                        <div className="chart" id="worstMatchupsChart">
                            <h1>WORST_MATCHUPS</h1>
                            <p> -- the chart will go here once the code for a dynamic chart is developed -- </p>
                        </div>
                    </section>

                </div>

            </section>

            <footer>
                <p>Clash Royale API required that I put some disclaimers as a condition of using their API, so that will go here eventually.</p>
            </footer>
            
        </main>
    )
}

export default Dashboard;