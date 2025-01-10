"use client";
import React, { Suspense } from "react";
import { Flex, Spin } from "antd";

const Loading = () => {
  const LazyContent = React.lazy(() => import("./page"));
  const contentStyle: React.CSSProperties = {
    padding: 50,
    background: "rgba(0, 0, 0, 0.05)",
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
    </Suspense>
  );
};

export default Loading;
