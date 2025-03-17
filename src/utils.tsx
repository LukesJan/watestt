export function calcAge(birthYear: number): number {
    const currentYear: number = new Date().getFullYear();
    return currentYear - birthYear;
}