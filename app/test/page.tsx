"use client";

import TextArea from "@/components/Controls/TextArea";
import TextField from "@/components/Controls/TextField";
import ChatHeader from "@/components/Layouts/ChatHeader";
import SidebarLayout from "@/components/Layouts/SidebarLayout";
import UserAvatar from "@/components/Misc/UserAvatar";
import { useState } from "react";

type Props = {};

const TestPage = ({}: Props) => {
  const [text, setText] = useState("");
  const [textArea, setTextArea] = useState("");
  return (
    <div>
      <SidebarLayout>
        <ChatHeader />
        <div className="flex flex-col gap-2">
          <h1>Header 1</h1>
          <h2>Header 3</h2>
          <h3>Header 2</h3>
          <h4>Header 4</h4>
          <div className="container flex gap-2">
            <button className="primary-button">Primary button</button>
            <button className="outlined-button">Outlined button</button>
            <button className="text-button">Text button</button>
          </div>
          <input placeholder="Input field" />
          <p className="body-1">
            Parapgraph Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Suscipit, maiores debitis, earum ad possimus eius, quae vel optio
            voluptatem doloribus at nisi autem. Praesentium excepturi incidunt
            accusantium cum tempore. Soluta?
          </p>
          <p className="body-2">Body 2 text</p>
          <p className="text-overline">Overline</p>
          <TextField
            label="Username"
            placeholder="Placeholder"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <TextArea
            label="Text area label"
            value={textArea}
            placeholder="Placeholder"
            onChange={(e) => setTextArea(e.target.value)}
          />
          <TextArea
            label="Resizeable"
            value={textArea}
            placeholder="..."
            resizeable
            onChange={(e) => setTextArea(e.target.value)}
          />
          <UserAvatar status="Active" username="Username 1" />
          <UserAvatar status="Inactive" username="Username 2" />
          <UserAvatar status="Do not disturb" username="Username 3" />
        </div>
      </SidebarLayout>
    </div>
  );
};

export default TestPage;
