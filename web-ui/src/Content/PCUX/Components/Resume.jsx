import { Tabs, Tab, Button } from "@react95/core";


export function Resume() {

  return (
    <div className='text-left flex flex-col'>
    <Tabs width="350px" defaultActiveTab="About">
        <Tab title="About">
        </Tab>
        <Tab title="Education">
        </Tab>
        <Tab title="Experience">
        </Tab>
        <Tab title="Skills">
        </Tab>
    </Tabs>
    <Button className='mt-2'>Download CV</Button>
    </div>
  );
}
