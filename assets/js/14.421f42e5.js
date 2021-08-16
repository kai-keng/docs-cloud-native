(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{370:function(t,r,a){"use strict";a.r(r);var e=a(44),_=Object(e.a)({},(function(){var t=this,r=t.$createElement,a=t._self._c||r;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"应用运维"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#应用运维"}},[t._v("#")]),t._v(" 应用运维")]),t._v(" "),a("p",[t._v("DevOps 涉及整个研发体系。包括：CI/CD、健康监测、日志收集、性能监控、链路追踪、服务治理（负载均衡/流量管控/熔断等）")]),t._v(" "),a("h2",{attrs:{id:"集群管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#集群管理"}},[t._v("#")]),t._v(" 集群管理")]),t._v(" "),a("p",[t._v("当前采用 "),a("a",{attrs:{href:"https://github.com/rancher/rancher",target:"_blank",rel:"noopener noreferrer"}},[t._v("Rancher"),a("OutboundLink")],1),t._v(" 社区版本维护k8s集群")]),t._v(" "),a("h2",{attrs:{id:"持续集成与持续发布-ci-cd"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#持续集成与持续发布-ci-cd"}},[t._v("#")]),t._v(" 持续集成与持续发布(CI/CD)")]),t._v(" "),a("h3",{attrs:{id:"持续集成-ci"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#持续集成-ci"}},[t._v("#")]),t._v(" 持续集成(CI)")]),t._v(" "),a("h4",{attrs:{id:"流程-pipeline"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#流程-pipeline"}},[t._v("#")]),t._v(" 流程（pipeline）")]),t._v(" "),a("ol",[a("li",[t._v("代码提交 - [gitlab & helm]")]),t._v(" "),a("li",[t._v("应用构建 - [docker]")]),t._v(" "),a("li",[t._v("应用单元测试 - [各业务项目自定义，可选: JUnit]")]),t._v(" "),a("li",[t._v("制品仓库推送及代码安全扫描 - [harbor]")]),t._v(" "),a("li",[t._v("应用部署 - [helm & k8s]")]),t._v(" "),a("li",[t._v("自动化测试 - [各业务自定义，接口自动化 & UI自动化]")]),t._v(" "),a("li",[t._v("性能测试 - [各业务自定义, 可选: JMeter]")]),t._v(" "),a("li",[t._v("安全测试 - [待完善]")])]),t._v(" "),a("p",[t._v("如有必要：")]),t._v(" "),a("ul",[a("li",[t._v("人工验证")]),t._v(" "),a("li",[t._v("构建应用最终发布包 - [helm]")])]),t._v(" "),a("h3",{attrs:{id:"持续部署-cd"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#持续部署-cd"}},[t._v("#")]),t._v(" 持续部署(CD)")]),t._v(" "),a("p",[t._v("结合目前生产实际情况及需求，暂不考虑持续部署")]),t._v(" "),a("p",[t._v("一般应用部署流程：")]),t._v(" "),a("ul",[a("li",[t._v("[开发侧] 提供构建应用最终部署包 & 应用配置管理及必要文档说明 - [helm]")]),t._v(" "),a("li",[t._v("[运维侧] 发布应用 - [helm & k8s]")])]),t._v(" "),a("h2",{attrs:{id:"日志"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#日志"}},[t._v("#")]),t._v(" 日志")]),t._v(" "),a("h2",{attrs:{id:"监控"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#监控"}},[t._v("#")]),t._v(" 监控")]),t._v(" "),a("p",[t._v("这是选用当前业界广泛采用的 prometheus")]),t._v(" "),a("h3",{attrs:{id:"资源监控-metric"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#资源监控-metric"}},[t._v("#")]),t._v(" 资源监控（Metric）")]),t._v(" "),a("h3",{attrs:{id:"链路追踪-tracing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#链路追踪-tracing"}},[t._v("#")]),t._v(" 链路追踪（Tracing）")]),t._v(" "),a("p",[t._v("这里使用 "),a("code",[t._v("CNCF")]),t._v(" 社区提出的分布式链路追踪规约 "),a("a",{attrs:{href:"https://opentracing.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Opentracing"),a("OutboundLink")],1),t._v(" 的开源实现 "),a("a",{attrs:{href:"https://www.jaegertracing.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("jaeger"),a("OutboundLink")],1),t._v("，可同时兼容 Java 技术栈下广泛采用的 "),a("a",{attrs:{href:"https://zipkin.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("zipkin"),a("OutboundLink")],1),t._v(" 传输协议；")]),t._v(" "),a("p",[t._v("客户端方面为最好限度保证拓展性采用"),a("a",{attrs:{href:"https://opentelemetry.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("opentelemetry"),a("OutboundLink")],1),t._v("框架下各语言下的集成库；")]),t._v(" "),a("h3",{attrs:{id:"性能监控-apm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#性能监控-apm"}},[t._v("#")]),t._v(" 性能监控（APM）")]),t._v(" "),a("h2",{attrs:{id:"发布策略"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#发布策略"}},[t._v("#")]),t._v(" 发布策略")]),t._v(" "),a("ul",[a("li",[t._v("滚动发布")]),t._v(" "),a("li",[t._v("蓝绿发布")]),t._v(" "),a("li",[t._v("灰度发布")])])])}),[],!1,null,null,null);r.default=_.exports}}]);