
"use client";
import React, { Suspense } from "react";
import { Flex, Spin } from "antd";

const Loading = () => {
  const LazyContent1 = React.lazy(() => import("./PaintingForSale"));
  const LazyContent2 = React.lazy(() => import("./ClassicRealism"));
  const LazyContent3 = React.lazy(() => import("./Category"));
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
      <LazyContent1 />
      <LazyContent2 />
      <LazyContent3 />
    </Suspense>
  );
};

export default Loading;
