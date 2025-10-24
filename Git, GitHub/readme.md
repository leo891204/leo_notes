# Git, GitHub
20251024
## 용어정리
Git : 버전 관리 시스템
GitHub : Git으로 관리하는 프로젝트를 올려둘 수 있는 사이트
Git Bash : CLI 방식으로 Git을 사용할 수 있는 환경

CLI : 명령어 인터페이스. 주로 터미널로 컴퓨터와 상호작용
GUI : 그래픽 유저 인터페이스. 기능을 그래픽으로 나타낸 것

Local(로컬저장소) : Git으로 버전관리하는 **내 컴퓨터 안의 폴더**
Remot(원격저장소) : **GitHub에서 협업하는 폴더**

Repository(repo) : 프로젝트가 존재하는 저장공간
Branch : 레포 공간에서 독립적으로 어떤 작업을 하기 위한 공간
Commit : 버전 관리를 통해 생성된 파일. 생성한 파일을 메시지와 함께 Git Repo에 저장
(*로컬 저장소에는 변경이 반영되어있으나, 원격저장소에는 반영되지 않은 상태(PUSH해야 반영됨))

Pull : 원격저장소의 내용을 로컬저장소에 가져오는 것
Push : commit한 내용을 원격 저장소에 업로드


## GitHub 프로세스
### GIT ADD > GIT COMMIT > GIT PUSH
- git add로 스테이징영역에 파일을 올림 > git commit으로 메시지랑 Git Repo에 저장 > git push로 원격저장소 업로드
- 이 과정에서 내가 수정한 내용과 원격저장소 내용이 다를 수 있으므로 **git merge** 를 수행하여 로컬에 있는 소스코드를 원격 저장소에 맞춤.
## 로컬저장소 생성부터 순서대로
### 1. 로컬저장소 생성 및 Repository와 연결
`cd 폴더경로 #경로수정`
`git init #initialize empty git repository`
`git remote add 원격저장소별칭 레포URL #로컬저장소를 원격저장소에 연결` 
`git remote --verbose #연결된 원격저장소 확인`
`git remote rename 이전이름 바꿀이름 #원격저장소 이름 변경`
`git remote remove 원격저장소별칭 #원격연결제거`

`git branch -m 브랜치명 #브랜치 생성`
### 2. Staging Area에 파일 업로드
`git add 파일명 #스테이징영역에 파일 올림`
`git add . #한번에 스테이지에 올림`
`git add --all #한번에 스테이지에 올림`

### 3. Commit
`git commit -m "설명" #상세설명기술(무엇이 변경되었는지, 왜 만들었는지 등)`
`git log #커밋들 모두 확인`

### 4. Push
`git push 원격저장소이름 브랜치이름 #커밋한 파일 Push해서 원격저장소로 업로드`

### 5. Clone
clone : 원격저장소의 코드와 버전 전체를 로컬에 내려받음.(=복사죠ㅇㅇ)
`git clone 원격저장소주소 . #해당 주소의 파일들이 로컬에 내려받아짐`

### Pull, Fetch 
`git pull 원격저장소이름 브랜치이름 #원격저장소에 새로운 커밋이 있으면 그걸 내 로컬에 받아옴`
fetch : 원격저장소에 변경사항이 있는지 확인만하고, **변경 데이터를 로컬에 가져오진 않음**

### Branch
Branch : 특정한 기준 시점에서 줄기를 나누어 작업할 수 있는 기능
- 브랜치는 물리적인 길이 아닌 포인터임.(=커밋을 가리키는 것만으로 분기를 만들 수 있다)
- 보통 하나의 개발 브랜치에는 한 사람만 작업해서 올림
- HEAD 포인터 활용해서 브랜치 사이를 자유롭게 넘나들 수 있음
  (과거 커밋으로도 옮길 수 있으나, 이 경우엔 메인 브랜치의 포인터와 하드가 떨어져 detached HEAD 상태가 됨)