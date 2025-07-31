import { Fieldset, Frame } from "@react95/core";

export function Credits() {
  return (
    <div className="text-left flex flex-col gap-4 p-2">

      {/* Author */}
      <Fieldset legend="Craftsman" width="100%">
        <Frame padding="$7">
          <p>
            <b>Moi</b>_ design, code, models, animations and textures.
          </p>
        </Frame>
      </Fieldset>

      {/* Tools */}
      <Fieldset legend="Tools & Tech" width="100%">
        <Frame padding="$7">
          <p>
            <b>Built with</b>_ react-three-fiber, react95, js-dos, blender.
          </p>
        </Frame>
      </Fieldset>

      {/* Inspirations */}
      <Fieldset legend="Inspirations" width="100%">
        <Frame padding="$7">
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <a
                href="https://henryheffernan.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Henry Heffernan
              </a>
            </li>
            <li>
              <a
                href="https://hawwokitty.github.io/my-portfolio/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Kitty
              </a>
            </li>
            <li>
              <a
                href="https://bruno-simon.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Bruno Simon
              </a>
            </li>
          </ul>
        </Frame>
      </Fieldset>
    </div>
  );
}
