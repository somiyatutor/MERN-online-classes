export const powers=[
    "Flight",
    "Teleportation",
    "Energy Projection",
    "Elemental Control",
    "Magnetism Control",
    "Invisibility",
    "Thunder Control",
    "Laser eyes"
];

export const avatars=[
    "🦸‍♀️",
    "🔥",
    "⚡",
    "🌟",
    "🐍",
    "👽"
];

export const getRandomItem = arr =>
    arr[Math.floor(Math.random()*arr.length)];

export const getRarity=level=>{
    if(level>=90) return "Legendary";
    if(level>=70) return "Epic";
    if(level>=50) return "Rare";

    return "Common";
}