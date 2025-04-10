# github 推送代码443超时报错

## 问题描述

在推送代码到github时，出现443超时错误。

## 问题产生原因

1. 如果你开启了VPN，很可能是因为代理的问题

## 解决方案

1. git config --global http.proxy 127.0.0.1:7890
2. git config --global https.proxy 127.0.0.1:7890

注意：端口号需要根据你的代理设置进行调整。
