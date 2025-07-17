import { Tabs, Tab, Button, Fieldset, Frame, Avatar, Checkbox, ProgressBar } from "@react95/core";


export function Resume() {

  return (
    <div className='text-left flex flex-col'>
      <Tabs width="350px"defaultActiveTab="About">
          <Tab title="About" >
            <div className="flex flex-col gap-3">
              <p><b>Hi, I'm Moi</b></p>
              <Avatar
                alt="Moet logo"
                size="115px"
                src="icons/moet.webp"
                circle
                
              />
              <Fieldset legend="a Software Engineer" width="100%">
                <Frame display="flex" flexDirection="column" padding="$10">
                  passionate about accessibility, user interaction, and creating inclusive, intuitive digital experiences across all devices. Committed to innovation and continuous improvement.
                </Frame>
              </Fieldset>
            </div>
          </Tab>
          <Tab title="Education">
              <Fieldset legend="" width="100%">
                <Frame padding="$10">
                <Checkbox readOnly checked>
                  <b>Bachelor in Software Engineering</b> at University of Oviedo (2020)
                </Checkbox>
                <Checkbox readOnly checked>
                  <b>Master’s in Computer Graphics, Virtual Reality & Simulation</b> at U-TAD (2021)
                </Checkbox>
                </Frame>
              </Fieldset>
          </Tab>
          <Tab title="Experience">
            <Fieldset legend="" width="100%">
              <Frame padding="$10">
                <Checkbox readOnly checked>
                  <b>Immersive Technologies Developer</b> at CTIC Technological Center (Oct 2021 – Present)
                </Checkbox>
                <Checkbox readOnly checked={false}>
                  <b>Web Developer</b> at Imascono (Jun 2021 – Oct 2021)
                </Checkbox>
                <Checkbox readOnly checked={false}>
                  <b>Mobile Developer</b> at GooApps (Nov 2019 – Oct 2020)
                </Checkbox>
                <Checkbox readOnly checked={false}>
                  <b>Web Developer</b> at Adele Robots (Jan 2019 – May 2019)
                </Checkbox>
              </Frame>
            </Fieldset>
          </Tab>
          <Tab title="Skills">
              <Fieldset legend="Programming" width="100%" height="170px" className="overflow-y-scroll">
                <Frame padding="$10" className="flex flex-col gap-2">
                  <p>• Extended Realities (XR)
                  <ProgressBar percent={99} /></p> 

                  <p>• Unity / C#
                  <ProgressBar percent={75} /></p> 

                  <p>• React / Redux
                  <ProgressBar percent={75} /></p> 

                  <p>• ThreeJS / Javascript
                  <ProgressBar percent={75} /></p> 

                  <p>• HTML / CSS
                  <ProgressBar percent={65} /></p> 

                  <p>• Git
                  <ProgressBar percent={65} /></p> 

                  <p>• Blender
                  <ProgressBar percent={65} /></p> 

                  <p>• Docker
                  <ProgressBar percent={35} /></p> 

                </Frame>
              </Fieldset>
              <Fieldset legend="Languages" width="100%">
                <Frame padding="$10">
                  <p>• Spanish
                  <ProgressBar percent={100} /></p> 

                  <p>• English
                  <ProgressBar percent={70} /></p> 
                </Frame>
              </Fieldset>
          </Tab>
      </Tabs>
      <Button className='mt-2 w-fit self-end'>Download CV</Button>
    </div>
  );
}
