- warning: in the working copy of 'Linux/BESIP', LF will be replaced by CRLF the next time Git touches it

  ```tcl
  git config --global core.autocrlf true
  ```
- Solve Chinease Charatores

  ```tcl
  git config --global core.quotepath fals
  ```


- 出现“Failed to connect to [github.com](https://link.zhihu.com/?target=http%3A//github.com) port 443 : Timed out”

  ```
  # 查看代理
  git config --global --get http.proxy
  git config --global --get https.proxy
  
  # 取消代理
  git config --global --unset http.proxy
  git config --global --unset https.proxy
  ```

- 出现“OpenSSL SSL_read: Connection was reset, errno 1005”

  ```
  git config --global http.sslVerify "false"
  git config --global https.sslVerify "false"
  
  同时也可以写在.git/config文件中
  [http]
      sslVerify = false
  [https]
      sslVerify = false    
  ```

  
