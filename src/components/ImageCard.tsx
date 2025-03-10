import React from 'react';

interface ImageCardProps {
    imageUrl: string;
    title: string;
    description: string;
    Link: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ imageUrl, title, description, Link }) => {
    return (
        <div className="mx-auto max-w-md overflow-hidden rounded-xl bg-white shadow-md md:max-w-2xl">
            <div className="h-full md:flex">
                <div className="md:shrink-0">
                    <img
                        className="h-full w-full object-cover md:h-full md:w-60"
                        src={imageUrl}
                        alt="Modern building architecture"
                    />
                    </div>
                    <div className="p-8">
                <div className="text-sm font-semibold tracking-wide text-indigo-500 uppercase">{ title }</div>
                <a href={Link} className="mt-1 block text-lg leading-tight font-medium text-indigo-500 hover:underline">
                    { Link }
                </a>
                <p className="mt-2 text-gray-500">
                    { description }
                </p>
                </div>
            </div>
        </div>
    );
};

export default ImageCard;