<template>
  <div class="Layout">
    <a-layout id="components-layout-demo-custom-trigger">
      <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
        <div class="logo">beisi商城B端 - TZOF</div>
        <a-menu
          theme="dark"
          mode="inline"
          :default-selected-keys="['1']"
          :style="{ height: '100%', borderRight: 0 }"
        >
          <a-menu-item key="1">
            <a-icon type="pie-chart" theme="filled" />
            <span>数据视图</span>
          </a-menu-item>
          <a-sub-menu key="sub2">
            <span slot="title"
              ><a-icon type="shop" theme="filled" />商品管理</span
            >
            <a-menu-item key="5">商品列表</a-menu-item>
            <a-menu-item key="6">添加商品</a-menu-item>
            <a-menu-item key="7">修改商品</a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub3">
            <span slot="title"
              ><a-icon type="container" theme="filled" />订单管理</span
            >
            <a-menu-item key="8">订单列表</a-menu-item>
            <a-menu-item key="9">退货申请处理</a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub4">
            <span slot="title"
              ><a-icon type="idcard" theme="filled" />客户管理</span
            >
            <a-menu-item key="10">客户列表</a-menu-item>
            <a-menu-item key="11">添加用户</a-menu-item>
            <a-menu-item key="12">用户设置</a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub5">
            <span slot="title"
              ><a-icon type="setting" theme="filled" />个人信息</span
            >
            <a-menu-item key="13">个人中心</a-menu-item>
            <a-menu-item key="14">个人信息设置</a-menu-item>
          </a-sub-menu>
        </a-menu>
      </a-layout-sider>
      <a-layout>
        <a-layout-header style="background: #fff; padding: 0">
          <section>
            <img src="../../assets/logo2.png" alt="noimg" />
            <!-- 动态 -->
            <span>TZOF</span>
            <div>
              <p>
                <a-icon type="user" />
                <span>个人中心</span>
              </p>
              <p>
                <a-icon type="setting" />
                <span>个人设置</span>
              </p>
              <p>
                <a-icon type="logout" />
                <span>退出登录</span>
              </p>
            </div>
          </section>
        </a-layout-header>
        <a-layout-content
          :style="{
            margin: '24px 16px',
            padding: '24px',
            background: '#fff',
            minHeight: '280px',
          }"
        >
          <router-view></router-view>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>

<script>
export default {
  name: "Layout",
  data: function () {
    return {
      collapsed: false,
    };
  },
};
</script>

<style lang="less" scoped>
.Layout {
  overflow: hidden;
  #components-layout-demo-custom-trigger {
    height: 100vh;
    overflow: hidden;
    .ant-menu-item {
      font-size: 15px;
      i {
        font-size: 16px;
        color: white;
        font-weight: bold;
      }
    }
    .ant-layout-header {
      position: relative;
      section {
        display: flex;
        align-items: center;
        position: absolute;
        right: 20px;
        top: 50%;
        transform: translate(0, -50%);
        cursor: pointer;
        &:hover div {
          display: flex;
        }
        img {
          height: 50px;
          border-radius: 50%;
          border: 1px solid #ccc;
        }
        span {
          font-size: 16px;
          font-weight: bold;
          margin-left: 10px;
        }
        div {
          width: 116px;
          cursor: initial;
          z-index: 100;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          position: absolute;
          bottom: 0;
          line-height: initial;
          transform: translate(0, 100%);
          border: 1px solid #ccc;
          box-sizing: border-box;
          background-color: #fff;
          display: none;
          p {
            margin: 0;
            padding: 10px 15px;
            cursor: pointer;
            box-sizing: border-box;
            display: flex;
            align-items: center;
            &:nth-of-type(2) {
              border-top: 1px solid #ccc;
              border-bottom: 1px solid #ccc;
            }
            span {
              font-weight: initial;
              font-size: 15px;
              margin: 0;
              padding: 0;
            }
            i{
              font-size: 14px;
              margin-right: 10px;
            }
          }
        }
      }
    }
  }
  #components-layout-demo-custom-trigger .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
  }

  #components-layout-demo-custom-trigger .trigger:hover {
    color: #1890ff;
  }

  #components-layout-demo-custom-trigger .logo {
    height: 32px;
    margin: 16px;
    font-size: 18px;
    font-weight: bolder;
    color: white;
    overflow: hidden;
  }
}
</style>