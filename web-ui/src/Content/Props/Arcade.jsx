import ArcadeScreen from './ArcadeScreen';

export default function Arcade({ nodes, playSignal }) {
  return (
    <>
      <primitive object={nodes.arcade}>
        <primitive object={nodes['arcade-buttons']} />
        <ArcadeScreen nodes={nodes} playSignal={playSignal} />
      </primitive>
    </>
  );
}
