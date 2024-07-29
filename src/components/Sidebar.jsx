import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-100 p-4">
      <Accordion type="single" collapsible>
        <AccordionItem value="shapes">
          <AccordionTrigger>Shapes</AccordionTrigger>
          <AccordionContent>
            {/* Add shape options here */}
            <p>Circle, Square, Triangle, etc.</p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="colors">
          <AccordionTrigger>Colors</AccordionTrigger>
          <AccordionContent>
            {/* Add color picker here */}
            <p>Color picker component</p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="patterns">
          <AccordionTrigger>Patterns</AccordionTrigger>
          <AccordionContent>
            {/* Add pattern options here */}
            <p>Pattern 1, Pattern 2, etc.</p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="settings">
          <AccordionTrigger>Settings</AccordionTrigger>
          <AccordionContent>
            {/* Add settings options here */}
            <p>Grid visibility, Snapping, etc.</p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </aside>
  );
};

export default Sidebar;