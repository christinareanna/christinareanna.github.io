import React from "react";
import Sidebar from '../components/Sidebar';

export const Poetry = ({ isOpen, toggle }) => {
    return (
        <>
            <div className='sidebar'>
                <Sidebar isopen={isOpen} toggle={toggle} />
            </div>
            {/* <Navbar /> */}
            <h1 className='heading'>Poetry</h1>
            <h3 style={{ margin: "2rem" }}>Just a teaser of some of my poems.</h3>
            <div class="card text-bg-secondary" style={{ margin: "2rem" }}>
                <div class="card-header">White Space</div>
                <div class="card-body text-center text-center">
                    <h5 class="card-title">01.13.2023</h5>
                    <p class="card-text">
                        I have no more space
                        <br />
                        To give you any room on my canvas
                        <br />
                        The begetter dancing with secrets and intention
                        <br />
                        To hoard as much space possible
                        <br />
                        For the quintessential concocted survival
                        <br />
                        Love is a painting with rigged brush strokes
                        <br />
                        And if I'm not the one holding that brush
                        <br />
                        Then the colors will leak
                        <br />
                        And will slovenly fuse
                        <br />
                        My frame is carefully crafted with
                        <br />
                        Dimension, decision, and stinginess
                        <br />
                        What they see is the smooth edges
                        <br />
                        That are soft to the touch
                        <br />
                        What they didn't see
                        <br />
                        Is how much cutting and sanding it took
                        <br />
                        To get it that way
                    </p>
                </div>
            </div>
            <hr />
            <div class="card text-bg-secondary" style={{ margin: "2rem" }}>
                <div class="card-header">The Undoing</div>
                <div class="card-body text-center">
                    <h5 class="card-title">03.08.2021</h5>
                    <p class="card-text">
                        I never enjoyed physical affection
                        <br />
                        But feeling you
                        <br />
                        Reminded me
                        <br />
                        That everything I needed from you
                        <br />
                        Was everything I needed from myself
                        <br />
                        Maybe this is why
                        <br />
                        It was so difficult
                        <br />
                        To untie our knots
                        <br />
                        Now I can untangle my own
                        <br />
                        Because of you
                    </p>
                </div>
            </div>
        </>
    )
}
