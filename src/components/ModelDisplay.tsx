import { PresentationControls, Stage, useGLTF } from "@react-three/drei";
import type { PresetsType } from "@react-three/drei/helpers/environment-assets";
import { Canvas } from "@react-three/fiber";

type Props = {
  model_path: string;
  environment: PresetsType;
};

export default function ModelDisplay({ model_path, environment }: Props) {
  const { scene } = useGLTF(model_path);

  return (
    <div className="h-96 rounded-lg overflow-clip">
      <Canvas shadows camera={{ fov: 45 }} dpr={[1, 2]}>
        <color attach="background" args={["#101010"]} />
        <PresentationControls global>
          <Stage environment={environment || "studio"}>
            <primitive object={scene}  />
          </Stage>
        </PresentationControls>
      </Canvas>
    </div>
  );
}
