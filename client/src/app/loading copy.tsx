
"use client";
import React, { Suspense } from "react";
import { Flex, Spin } from "antd";

const Loading = () => {
  const LazyContent = React.lazy(() => import("./page"));
  const LazyContent2 = React.lazy(() => import("../app/Home/page"));
  const contentStyle: React.CSSProperties = {
    padding: 50,
    borderRadius: 4,
  };

  const content = <div style={contentStyle} />;

  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center bg-brown h-screen">
          <Flex gap="middle">
            <Spin tip="Loading" size="large" style={{ color: "#E9AB0D" }}>
              {content}
            </Spin>
          </Flex>
        </div>
      }
    >
      <LazyContent />
      <LazyContent2 />
    </Suspense>
  );
};

export default Loading;
