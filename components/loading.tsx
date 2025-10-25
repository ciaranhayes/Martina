import React from "react";

export default function TextSkeleton() {
    return (
        <div className="w-full space-y-4 animate-pulse">
            <div className="h-4 bg-gray-300 rounded w-5/6 min-w-[200px]" />
            <div className="h-4 bg-gray-300 rounded w-11/12 min-w-[250px]" />
            <div className="h-4 bg-gray-300 rounded w-4/5 min-w-[180px]" />
            <div className="h-4 bg-gray-300 rounded w-full min-w-[300px]" />
            <div className="h-4 bg-gray-300 rounded w-3/4 min-w-[220px]" />
        </div>
    );
}
