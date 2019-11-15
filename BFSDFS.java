import java.util.Queue;
import java.util.*;
import javax.management.Query;

class Main {

  static class Node{
    public int val;
    private Node left;
    private Node right;

    public Node(int val){
      this.val = val;
      this.right = null;
      this.left = null;
    }
  }

  static class BST{
    Node root;
    public BST(){
      this.root = null;
    }

    public void insert(int val){
      Node temp = new Node(val);
      if(this.root == null){
        root = temp;
      }else{
        Node curr = root;
        while(curr != null){
          if     (val > curr.val && curr.right == null){curr.right = temp;break;}
          else if(val <= curr.val && curr.left == null){curr.left = temp;break;}
          else if(val > curr.val && curr.right != null){curr = curr.right;}
          else if(val <= curr.val && curr.left != null){curr = curr.left;}
        }
      }
    }

    public void BFS(Node root){
      Queue<Node> q = new LinkedList<Node>();
      q.add(root);
      while(!q.isEmpty()){
        Node current = q.poll();
        System.out.print(current.val + ", ");
        if(current.left != null){
          q.add(current.left);
        }
        if(current.right != null){
          q.add(current.right);
        }
      }
    }

    public void BFSRight(Node root){
      Stack<Node> stack = new Stack();
      stack.add(root);
      while(!stack.isEmpty()){
        Node current = stack.pop();
        System.out.print(current.val + ", ");
        if(current.right != null){
          stack.add(current.right);
        }
        if(current.left != null){
          stack.add(current.left);
        }
      }
    }

    public void BFSRecur(Node root){
      if(root.right != null){
        BFSRecur(root.right);
      }
      if(root.left != null){
        BFSRecur(root.left);
      }
      System.out.print(root.val + ", ");
    }

    public ArrayList<Integer> DFSIn(Node root, ArrayList<Integer> list){
      if(root.left != null){
        DFSIn(root.left, list);
      }
      list.add(root.val);
      if(root.right != null){
        DFSIn(root.right, list);
      }
      return list;
    }

  }

  public static void main(String[] args) {
    BST tree = new BST();

    tree.insert(5);
    tree.insert(10);
    tree.insert(20);
    tree.insert(3);
    tree.insert(4);
    tree.insert(2);
    tree.insert(7);
    
    System.out.println(tree.DFSIn(tree.root, new ArrayList<Integer>()));
  }
}
