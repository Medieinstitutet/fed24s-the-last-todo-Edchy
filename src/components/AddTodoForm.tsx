import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import DatePicker from "./DatePicker";
import { useId } from "react";
import Combobox from "./Combobox";
import TagSelector from "./TagSelector";
import { Priority, Todo } from "@/types/Todo";

interface AddTodoFormProps {
  onComplete?: () => void;
  onAddTodo?: (todo: Todo) => void;
}

const formSchema = z.object({
  title: z.string().min(2, {
    message: "Mooooar letters please.",
  }),
  dueDate: z.date().optional(),
  description: z.string().optional(),
  priority: z.string(),
  category: z.string().min(1, {
    message: "Select a category goddammit.",
  }),
  tags: z
    .array(
      z.object({
        label: z.string(),
        value: z.string(),
      })
    )
    .optional(),
});

export function AddTodoForm({ onComplete, onAddTodo }: AddTodoFormProps) {
  const todoId = useId();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      dueDate: undefined,
      priority: "medium",
      description: "",
      category: "",
      tags: [],
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    const formattedValues = {
      id: `todo-${todoId}-${Date.now()}`,
      ...values,
      createdAt: new Date().toISOString(),
      completed: false,
      priority: values.priority as Priority,
      dueDate: values.dueDate ? values.dueDate.toISOString() : "",
    };

    // Log the formatted values
    console.log("Todo to add:", formattedValues);
    onAddTodo?.(formattedValues);
    onComplete?.();
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-4 px-4"
      >
        <div className="grid gap-4 md:grid-cols-2">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>What?</FormLabel>
                <FormControl>
                  <Input placeholder="bake a cake.." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="tags"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tags (optional)</FormLabel>
                <FormControl>
                  <TagSelector value={field.value} onChange={field.onChange} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description (optional)</FormLabel>
                <FormControl>
                  <Textarea placeholder="Add more details..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="dueDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>When? (optional)</FormLabel>
                <FormControl>
                  <DatePicker
                    date={field.value}
                    onDateChange={field.onChange}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Category</FormLabel>
                <FormControl>
                  <Combobox value={field.value} onChange={field.onChange} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="priority"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Priority</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select priority" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem className="text-emerald-400" value="low">
                      Low
                    </SelectItem>
                    <SelectItem className="text-yellow-400" value="medium">
                      Medium
                    </SelectItem>
                    <SelectItem className="text-red-400" value="high">
                      High
                    </SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button
          className="cursor-pointer bg-emerald-500 hover:bg-emerald-400 rounded-md w-full mx-auto border-1 py-5 z-60 text-white font-semibold"
          type="submit"
        >
          Add Todo ✨
        </Button>
      </form>
    </Form>
  );
}

export default AddTodoForm;
