import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

const ErrorCard = ({ error }) => {
  return (
    <div className="w-[85vw] md:w-[50vw] lg:w-[30vw] p-5">
      <Card>
        <CardHeader>
          <CardTitle>No Picture Available</CardTitle>
          <CardDescription className="">
            An error occured while fetching the data, in most cases this is due
            to NASA not posting an APOD for the selected date.
          </CardDescription>
          <CardDescription className="text-red-400">{error}</CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
};

export default ErrorCard;
