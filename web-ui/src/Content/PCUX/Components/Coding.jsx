import { Tree, Frame } from "@react95/core";
import { Explorer100, Mshtml32536, Fte128, Gcdef100, User} from "@react95/icons";

export function Coding() {

  const treeStructure = {
    data: [
      {
        label: 'Web',
        children: [
          {
            label: 'portfolio.html',
            icon: <Mshtml32536 variant="16x16_4"/>
          },
        ],
      },
      {
        label: 'Mobile',
        children: [
          {
            label: 'us-ar.apk',
            icon: <Fte128 variant="16x16_4"/>
          },
        ],
      },
      {
        label: 'VirtualReality',
        children: [
          {
            label: 'reactive.exe',
            icon: <User variant="16x16_4"/>
          },
        ],
      },
      {
        label: 'Games',
        children: [
          {
            label: 'balaçera.exe',
            icon: <Gcdef100 variant="16x16_8"/>
          },
          {
            label: 'pogo.exe',
            icon: <Gcdef100 variant="16x16_8"/>
          },
          {
            label: 'drac.exe',
            icon: <Gcdef100 variant="16x16_8"/>
          },
          {
            label: 'museum.exe',
            icon: <Gcdef100 variant="16x16_8"/>
          },
          {
            label: 'elections.exe',
            icon: <Gcdef100 variant="16x16_8"/>
          },
          {
            label: 'hand.exe',
            icon: <Gcdef100 variant="16x16_8"/>
          },
        ],
      },
    ],
  };

  const root = {
    label: 'My Computer',
    icon: <Explorer100 variant="16x16_4" />,
  };

  return (
    <div className="flex">
      <Frame w="160px" h="250px" bgColor="$material" padding="$0">
        <Frame className="overflow-auto"  h="100%" bgColor="white" boxShadow="$in" padding="$4"> 
          <Tree {...treeStructure} root={root} />
        </Frame>
      </Frame>
      <Frame w="240px" h="250px" bgColor="$material" boxShadow="$in">
      </Frame>
    </div>
  );
}
