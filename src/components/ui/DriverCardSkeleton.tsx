export default function DriverCardSkeleton() {
    return (
            <div className="bg-gray-800 animate-pulse rounded-lg p-4 h-50 w-full border-1 border-light ">
                <div className="h-32 bg-dark/40 rounded"></div>
                <div className="mt-2 h-4 w-3/4 bg-dark/40 rounded"></div>
                <div className="mt-2 h-4 w-1/2 bg-dark/40 rounded"></div>
            </div>
    );
}
