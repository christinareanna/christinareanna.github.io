import React from 'react';

const Story = ({ scenario, onChoice, onGameResult }) => {
    const scenarios = [
        {
            id: 0,
            text: 'You found a cat-sized dragon 3 years ago and named her Alra. Yesterday, you saw Alra eat a wild mana fruit near the forest of her origin world, The Abyss. The fruit has magical powers that causes her to grow in size and lures her back to The Abyss. You have 10 treats from your world, Zenith, that will make her cat-sized again. You must go to The Abyss, gain her trust again, or you lose Alra to The Abyss forever.',
            choices: [
                { text: 'Enter The Abyss', nextScenario: 1 },
                { text: 'Stay in Zenith', nextScenario: 2 }
            ]
        },
        {
            id: 1,
            text: 'As you enter The Abyss, you see 2 paths. Which do you choose?',
            choices: [
                { text: 'Go left', nextScenario: 3 },
                { text: 'Go right', nextScenario: 4 },
                { text: 'Go back', nextScenario: 0 }
            ]
        },
        {
            id: 2,
            text: 'You run away from The Abyss. The quest to rescue Alra ends here.',
            choices: [
                { text: 'Try again', nextScenario: 1 }
            ]
        },
        {
            id: 3,
            text: 'You go left and see a horse-sized dragon! It’s wagging its tail while also growling. What do you do?',
            choices: [
                { text: 'Throw 2 treats', nextScenario: 5 },
                { text: 'Keep walking', nextScenario: 6 },
                { text: 'Go back', nextScenario: 1 }
            ]
        },
        {
            id: 4,
            text: 'Oh no. You go right and encounter a dead end. You must turn around.',
            choices: [
                { text: 'Go back', nextScenario: 1 }
            ]
        },
        {
            id: 5,
            text: 'You now have 8 treats. As you move forward, the horse-sized dragon stares at you, eats the treats, and shrinks to cat-sized. It’s not growling anymore, but you see a strange looking door ahead. What do you do?',
            choices: [
                { text: 'Open the door', nextScenario: 7 },
                { text: 'Go back', nextScenario: 3 }
            ]
        },
        {
            id: 6,
            text: 'You stepped on a branch and scared the horse-sized dragon. It’s now the size of a bear. You must throw 2 treats to keep going.',
            choices: [
                { text: 'Throw 2 treats', nextScenario: 5 },
                { text: 'Run from The Abyss', nextScenario: 2 }
            ]
        },
        {
            id: 7,
            text: 'You open the door and see 3 cat-sized dragons sleeping. You just remembered you have Alra’s favorite squeaky toy in your pocket. One of the sleeping dragons might be her, but you aren’t sure. You can’t turn back. What do you do?',
            choices: [
                { text: 'Squeak the toy', nextScenario: 8 },
                { text: 'Keep walking, slowly', nextScenario: 8 }
            ]
        },
        {
            id: 8,
            text: 'The dragons hear you and wake up! But they know you were kind to the previous dragon, so they let you go peacefully through The Abyss. You see 2 more paths. What do you do?',
            choices: [
                { text: 'Go left', nextScenario: 10 },
                { text: 'Go right', nextScenario: 9 }
            ]
        },
        {
            id: 9,
            text: 'You go right, but it’s another dead end! You must go back.',
            choices: [
                { text: 'Go back', nextScenario: 8 },
            ]
        },
        {
            id: 10,
            text: 'You go left and see 8 dragons! 3 are dog-sized. 4 are bear-sized. One is elephant-sized. They are all growling and walking toward you, except for one. They can sense you are afraid. What do you do?',
            choices: [
                { text: 'Squeak the toy and walk forward', nextScenario: 11 },
                { text: 'Throw all 8 treats and leave', nextScenario: 2 }
            ]
        },
        {
            id: 11,
            text: 'You can’t believe it. You think you see Alra curled up next to a tree, sleeping peacefully, but she’s elephant-sized! What do you do?',
            choices: [
                { text: 'Call her name', nextScenario: 12 },
                { text: 'Throw all 8 treats and leave', nextScenario: 2 }
            ]
        },
        {
            id: 12,
            text: 'The dragon wakes up, wags its tail, and walks toward you. It’s Alra! But she looks scared. You must feed her 4 treats to make her cat-sized again.',
            choices: [
                { text: 'Throw 4 treats', nextScenario: 13 },
                { text: 'Throw all 8 treats and leave', nextScenario: 14 }
            ]
        },
        {
            id: 13,
            text: 'Alra shrinks to cat-sized again. She remembers you, and appreciates your kindness.',
            choices: [
                { text: 'Restart Game', nextScenario: 0 },
            ]
        },
        {
            id: 14,
            text: 'Alra eats the treats but looks sad as you start to walk back to Zenith. Are you sure you want to leave her in The Abyss?',
            choices: [
                { text: 'No, go back to Alra', nextScenario: 13 },
                { text: 'Leave The Abyss', nextScenario: 2 }
            ]
        },
    ];

    const currentScenario = scenarios.find(s => s.id === scenario);

    const handleChoice = (choice) => {
        const nextScenario = choice.nextScenario;
        onChoice(choice);

        if (nextScenario === 13) {
            alert('Congratulations, you gained Alra’s trust again and you return to Zenith together! The quest ends here.');
        } else if (nextScenario === 2) {
            alert('You can try again when you’re ready, if you wish.')
        }
    };

    return (
        <div className="card mx-auto mt-5" style={{ maxWidth: '500px' }}>
            <div className="card-body">
                <p className="card-text">{currentScenario.text}</p>
                <ul className="list-group">
                    {currentScenario.choices.map((choice, index) => (
                        <li key={index} className="list-group-item">
                            <button className="btn btn-primary btn-block" onClick={() => handleChoice(choice)}>
                                {choice.text}</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Story;