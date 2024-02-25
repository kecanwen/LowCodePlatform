import React, { FC } from "react";
import { Outlet } from "react-router-dom";
import { Button, Space, Divider } from "antd";
import { PlusOutlined, BarsOutlined, StarOutlined, DeleteOutlined } from "@ant-design/icons";
import styles from "./index.module.scss";

const ManageLayout: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Space direction="vertical">
          <Button type="primary" size="large" icon={<PlusOutlined />}>
            创建问卷
          </Button>
          <Divider style={{ borderTop: "transparent" }} />
          <Button size="large" icon={<BarsOutlined />}>
            我的问卷
          </Button>
          <Button size="large" icon={<StarOutlined />}>
            星标问卷
          </Button>
          <Button size="large" icon={<DeleteOutlined />}>
            回收站
          </Button>
        </Space>
      </div>
      <div className={styles.right}>
        <Outlet />
      </div>
    </div>
  );
};

export default ManageLayout;
