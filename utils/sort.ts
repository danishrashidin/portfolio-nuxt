export function sortByOrder<T>(
    array: T[],
    property: keyof T,
    order: string[]
): T[] {

    return array.sort((a, b) => {
        const aIndex = order.indexOf(a[property] as string);
        const bIndex = order.indexOf(b[property] as string);
        if (aIndex === -1 && bIndex === -1) return 0;
        if (aIndex === -1) return 1;
        if (bIndex === -1) return -1;
        return aIndex - bIndex;
    });

}
