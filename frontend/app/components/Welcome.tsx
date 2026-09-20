"use client";
import { useState } from "react";

type WelcomeProps = {
    name: string;
};

export default function Welcome({ name }: WelcomeProps){
    const [count, setCount] = useState(0);
    return(
        <section>
            <h1>Welcome, {name}</h1>
            <p>Your AI-powered career platform.</p>

            <p>Applications: {count}</p>

            <button onClick={() => setCount(count +1)}>
                Add Application
            </button>
        </section>
    );
}