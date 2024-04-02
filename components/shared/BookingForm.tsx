"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Select } from "../ui/select";

interface BookingFormData {
  firstName: string;
  lastName: string;
  contactNumber: string;
  date: string;
  time: string;
  noOfGuests: number;
  occasion: string;
}

interface BookingFormProps {
  availableTimes: string[];
  onSubmit: SubmitHandler<BookingFormData>;
}

const formSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  contactNumber: z.string().regex(/^\d{3}-\d{3}-\d{4}$/),
  date: z.string(),
  time: z.string(),
  noOfGuests: z.number().min(1).max(10),
  occasion: z.string(),
});

export default function BookingForm({
  availableTimes = [],
  onSubmit,
}: BookingFormProps) {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<BookingFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      contactNumber: "",
      date: "",
      time: "00:00",
      noOfGuests: 1,
      occasion: "Birthday",
    },
  });

  const options = availableTimes.map((time) => (
    <option key={time} value={time}>
      {time}
    </option>
  ));

  return (
    <main>
      <p className="desc-text form-desc">
        Please fill in the form below accurately to enable us to serve you
        nicely.
      </p>
      <Form {...Form}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel
                    htmlFor="first-name"
                    className="text-sm font-medium"
                  >
                    First Name
                  </FormLabel>
                  <Input
                    {...field}
                    id="first-name"
                    placeholder="Enter First Name"
                    className="border border-gray-300 rounded px-3 py-2"
                  />
                  {errors.firstName && (
                    <FormMessage className="text-red-500 text-xs">
                      {errors.firstName.message}
                    </FormMessage>
                  )}
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel
                    htmlFor="last-name"
                    className="text-sm font-medium"
                  >
                    Last Name
                  </FormLabel>
                  <Input
                    {...field}
                    id="last-name"
                    placeholder="Enter Last Name"
                    className="border border-gray-300 rounded px-3 py-2"
                  />
                  {errors.lastName && (
                    <FormMessage className="text-red-500 text-xs">
                      {errors.lastName.message}
                    </FormMessage>
                  )}
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="time"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="time" className="text-sm font-medium">
                    Time
                  </FormLabel>
                  <Select {...field} defaultValue="00:00">
                    {options}
                  </Select>
                  {errors.time && (
                    <FormMessage className="text-red-500 text-xs">
                      {errors.time.message}
                    </FormMessage>
                  )}
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="noOfGuests"
              render={({ field }) => (
                <FormItem>
                  <FormLabel
                    htmlFor="noOfGuests"
                    className="text-sm font-medium"
                  >
                    Number of Guests
                  </FormLabel>
                  <Input
                    {...field}
                    id="noOfGuests"
                    type="number"
                    min="1"
                    max="10"
                    placeholder="Enter Number of Guests"
                    className="border border-gray-300 rounded px-3 py-2"
                  />
                  {errors.noOfGuests && (
                    <FormMessage className="text-red-500 text-xs">
                      {errors.noOfGuests.message}
                    </FormMessage>
                  )}
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="occasion"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="occasion" className="text-sm font-medium">
                    Occasion
                  </FormLabel>
                  <Input
                    {...field}
                    id="occasion"
                    placeholder="Enter Occasion"
                    className="border border-gray-300 rounded px-3 py-2"
                  />
                  {errors.occasion && (
                    <FormMessage className="text-red-500 text-xs">
                      {errors.occasion.message}
                    </FormMessage>
                  )}
                </FormItem>
              )}
            />
          </div>
          <Button
            type="submit"
            className="bg-[#F4CE14] hover:bg-[#ffe047e1] text-black font-bold py-2 px-4 rounded"
          >
            Reserve
          </Button>
        </form>
      </Form>
    </main>
  );
}
