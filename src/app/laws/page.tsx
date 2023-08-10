'use client'

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from '@nextui-org/react';

type Props = {};

const LawsMenu = (props: Props) => {
  return (
    <div className="flex md:flex-col flex-row min-h-screen justify-center p-10 gap-10 items-center">
    <Card className="shadow-lg shadow-primary/30 md:max-w-full max-w-[300px] h-[700px]">
      <CardHeader className="flex gap-3 h-[200px]">
        <Image
          alt="nextui logo"
          height={40}
          radius="sm"
          src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
          width={40}
        />
        <div className="flex flex-col">
          <p className="text-md">NextUI</p>
          <p className="text-small text-default-500">nextui.org</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <p>Make beautiful websites regardless of your design experience.</p>
      </CardBody>
      <Divider />
      <CardFooter>
        <Link
          isExternal
          showAnchorIcon
          href="https://github.com/nextui-org/nextui"
        >
          Visit source code on GitHub.
        </Link>
      </CardFooter>
    </Card>
    </div>
  );
};

export default LawsMenu;
