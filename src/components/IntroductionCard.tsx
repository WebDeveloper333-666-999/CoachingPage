import React from 'react';

interface IntroductionCardProps {
    title: string;
    subtitle: string;
    description: string;
}

const IntroductionCard: React.FC<IntroductionCardProps> = ({ title, description }) => {
    return (
        <div className="introduction-card">
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
};

export default IntroductionCard;